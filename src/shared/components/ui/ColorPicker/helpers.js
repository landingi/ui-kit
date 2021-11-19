export const hexRegex = /^#[0-9A-F]{6}$/i
export const rgbOrRgbaRegex =
  /^rgb(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/i

/**
 * Converts hex value to rgba object or string
 * eg. (#345465, 1) => { r: 52, g: 85, b: 101, a: 1} | 'rgba(52,85,101,1)
 * @param {string} hex - color value in hex
 * @param {boolean} toString - bool param to declare if you want return string
 * @param {number} alpha
 * @returns {object | string} returns an object of r,g,b,a values
 */
export const hexToRgba = (hex, toString = false, alpha = 1) => {
  if (alpha > 1 || alpha < 0) {
    throw new Error('alpha is not correct!')
  }

  const red = parseInt(hex.slice(1, 3), 16)
  const green = parseInt(hex.slice(3, 5), 16)
  const blue = parseInt(hex.slice(5, 7), 16)
  const rgbaString = `rgba(${red},${green},${blue},${alpha})`
  const rgbaObj = {
    r: red,
    g: green,
    b: blue,
    a: alpha
  }

  return toString ? rgbaString : rgbaObj
}

/**
 * Converts value from rgb string to hex value
 * eg. ''rgb|rgba(255, 255, 255, 1)''=> #ffffff
 * @param {string} rgb
 * @returns {string}
 */
export const rgbTohex = rgb =>
  '#' +
  rgb
    .match(/[0-9|.]+/g)
    .map((x, i) =>
      i === 3
        ? parseInt(255 * parseFloat(x)).toString(16)
        : parseInt(x).toString(16)
    )
    .join('')

/**
 *
 * @param {string} color in hex or rgb/rgba format eg. "#333" or rgb(211,222,222)/"rgba(255,211,30,0.5)"
 * @returns {object} an object of red, green, blue, opacity integers
 */
export const convertColorToObj = color => {
  const isHexColor = hexRegex.test(color)
  const isRGBOrRGBAColor = rgbOrRgbaRegex.test(color)

  if (isHexColor) {
    return hexToRgba(color)
  }

  if (isRGBOrRGBAColor) {
    const [red, green, blue, alpha = 1] = color
      .substring(color.indexOf('(') + 1, color.length - 1)
      .split(', ')

    return {
      r: red,
      g: green,
      b: blue,
      a: alpha
    }
  }

  throw new Error('Invalid format color')
}
