/**
 * Position of child to parent element
 * @function centerParent
 * @param {number} parentWidth
 * @param {number} childWidth
 * @param {number} parentOffsetLeft
 * @return {number} Returns position
 */
export const centerParent = (parentWidth, childWidth, parentOffsetLeft) => {
  const calc = Math.floor(parentWidth / 2 - childWidth / 2 + parentOffsetLeft)
  return isNaN(calc) ? 0 : calc
}

/**
 * Element bounding
 * @param {node} element The element
 * @return {object} getBoundingClientRect()
 */
export const getBoundings = element =>
  element && element.getBoundingClientRect()

/**
 * Element is in view vertically
 * @param {node} element The element
 * @return {bool}
 */
export const isInViewVertical = element => {
  let rect = getBoundings(element)
  const { top, bottom, height } = rect,
    { parentNode } = element,
    { clientHeight } = document.documentElement

  if (rect.bottom < 0) return false

  if (top > clientHeight) return false
  do {
    rect = getBoundings(parentNode)
    if (top <= bottom === false) return false
    if (top + height <= top) return false
  } while (parentNode !== document.body)

  return true
}
