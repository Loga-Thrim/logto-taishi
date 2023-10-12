import type { EmailContent } from '@aws-sdk/client-sesv2';
import { SendEmailCommand, SESv2Client } from '@aws-sdk/client-sesv2';
import type { AwsSesConfig, Template, Payload } from './types.js';
export declare const makeClient: (accessKeyId: string, secretAccessKey: string, region: string) => SESv2Client;
export declare const makeEmailContent: (template: Template, payload: Payload) => EmailContent;
export declare const makeCommand: (config: AwsSesConfig, emailContent: EmailContent, to: string) => SendEmailCommand;
