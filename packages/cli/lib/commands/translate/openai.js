import fs from 'node:fs/promises';
import { trySafe } from '@silverhand/essentials';
import { got, HTTPError } from 'got';
import { HttpsProxyAgent } from 'hpagent';
import { z } from 'zod';
import { consoleLog, getProxy } from '../../utils.js';
import { getTranslationPromptMessages } from './prompts.js';
export const createOpenaiApi = () => {
    const proxy = getProxy();
    return got.extend({
        prefixUrl: 'https://api.openai.com/v1',
        headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
        },
        timeout: { request: 300_000 },
        ...(proxy && { agent: { https: new HttpsProxyAgent({ proxy, timeout: 300_000 }) } }),
    });
};
const gptResponseGuard = z.object({
    choices: z
        .object({
        message: z.object({ role: z.string(), content: z.string() }),
        finish_reason: z.string(),
    })
        .array(),
});
export const translate = async ({ api, targetLanguage, sourceFilePath, extraPrompt, }) => {
    const sourceFileContent = await fs.readFile(sourceFilePath, 'utf8');
    const response = await trySafe(api
        .post('chat/completions', {
        json: {
            model: 'gpt-3.5-turbo',
            messages: getTranslationPromptMessages({
                sourceFileContent,
                targetLanguage,
                extraPrompt,
            }),
        },
    })
        .json(), (error) => {
        consoleLog.warn(`Error while translating ${sourceFilePath}:`, String(error));
        if (error instanceof HTTPError) {
            consoleLog.warn(error.response.body);
        }
    });
    if (!response) {
        return;
    }
    const guarded = gptResponseGuard.safeParse(response);
    if (!guarded.success) {
        consoleLog.warn(`Error while guarding response for ${sourceFilePath}:`, response);
        return;
    }
    const [entity] = guarded.data.choices;
    if (!entity) {
        consoleLog.warn(`No choice found in response when translating ${sourceFilePath}`);
        return;
    }
    if (entity.finish_reason !== 'stop') {
        consoleLog.warn(`Unexpected finish reason ${entity.finish_reason} for ${sourceFilePath}`);
    }
    const { content } = entity.message;
    const matched = /```(?:ts)?\n(.*)```/s.exec(content)?.[1];
    if (!matched) {
        // Treat as pure code
        if (['const ', 'import '].some((prefix) => content.startsWith(prefix))) {
            return content;
        }
        consoleLog.warn('No matching code snippet from response:', content);
    }
    return matched;
};
