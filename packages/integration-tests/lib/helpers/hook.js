export const getHookCreationPayload = (event, url = 'not_work_url') => ({
    name: 'hook_name',
    events: [event],
    config: {
        url,
        headers: { foo: 'bar' },
    },
});
//# sourceMappingURL=hook.js.map