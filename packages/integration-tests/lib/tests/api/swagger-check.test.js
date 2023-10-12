import Validator from 'openapi-schema-validator';
import { api } from '#src/api/index.js';
const { default: OpenApiSchemaValidator } = Validator;
describe('Swagger check', () => {
    it('should provide a valid swagger.json', async () => {
        const response = await api.get('swagger.json');
        expect(response).toHaveProperty('statusCode', 200);
        expect(response.headers['content-type']).toContain('application/json');
        expect(() => {
            const object = JSON.parse(response.body);
            const validator = new OpenApiSchemaValidator({ version: 3 });
            const result = validator.validate(object);
            expect(result.errors).toEqual([]);
        }).not.toThrow();
    });
});
//# sourceMappingURL=swagger-check.test.js.map