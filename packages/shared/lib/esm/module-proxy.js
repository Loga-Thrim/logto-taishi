const { jest } = import.meta;
// For testing
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
const proxy = new Proxy({}, {
    get(_, name) {
        if (name === 'default') {
            return proxy;
        }
        return jest.fn();
    },
});
export default proxy;
