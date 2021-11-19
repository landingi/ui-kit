/**
 * Converts hex value to rgba object
 * eg. (#345465, 1) => {
 *   r: 52
 *   g: 85
 *   b: 101
 *   a: 1
 * }
 * @param {string} hex
 * @param {number} alpha
 * @returns {object} returns an object of r,g,b,a values
 */
export const hexToRgba = (hex, alpha = 1) => {
  if (alpha > 1 || alpha < 0) {
    throw new Error('alpha is not correct!')
  }

  const red = parseInt(hex.slice(1, 3), 16)
  const green = parseInt(hex.slice(3, 5), 16)
  const blue = parseInt(hex.slice(5, 7), 16)

  return {
    r: red,
    g: green,
    b: blue,
    a: alpha
  }
}

/**
 * Converts value from rgb string to hex value
 * eg. ''rgb(255, 255, 255)''=> #ffffff
 * @param {string} rgb
 * @returns {string}
 */
export const rgbTohex = rgb =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map(n => parseInt(n, 10).toString(16).padStart(2, '0'))
    .join('')}`


/**
 * 
 * @param {string} color in hex or rgb/rgba format eg. "#333" or rgb(211,222,222)/"rgba(255,211,30,0.5)"
 * @returns {object} an object of red, green, blue, opacity integers
 */
export const convertColorToObj = color => {
  const isHexColor = /^#[0-9A-F]{6}$/i.test(color)
  const isRGBOrRGBAColor = /^rgb(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/i.test(color)

  if (isHexColor) {
    return hexToRgba(color)
  }

  if (isRGBOrRGBAColor) {
    const [red,green,blue,alpha = 1] = color.substring(str.indexOf('(') +1, str.length -1).split(', ');

    return {
      r: red,
      g: green,
      b: blue,
      a: alpha
    }
  }

  throw new Error('Invalid format color')
}
