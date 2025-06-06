import color from 'color';
// Color hsl lighten/darken takes percentage value only, need to implement absolute value update
export const absoluteLighten = (baseColor, delta) => {
    const hslArray = baseColor.hsl().round().array();
    return color([hslArray[0] ?? 0, hslArray[1] ?? 0, (hslArray[2] ?? 0) + delta], 'hsl');
};
export const absoluteDarken = (baseColor, delta) => {
    const hslArray = baseColor.hsl().round().array();
    return color([hslArray[0] ?? 0, hslArray[1] ?? 0, (hslArray[2] ?? 0) - delta], 'hsl');
};
export const generateDarkColor = (lightColor) => absoluteLighten(color(lightColor), 10).hex();
