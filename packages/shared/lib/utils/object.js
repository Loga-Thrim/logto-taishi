export const isKeyInObject = (object, key) => object !== null && typeof object === 'object' && key in object;
