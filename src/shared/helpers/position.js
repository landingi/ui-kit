/**
 * Position of child to parent element
 * @function centerParent
 * @param {number} parentWidth
 * @param {number} childWidth
 * @param {number} parentOffsetLeft
 * @return {number} Returns position
 */
export const centerParent = (
  parentWidth,
  childWidth,
  parentOffsetLeft
) => {
  const calc = Math.floor(
    parentWidth / 2 - childWidth / 2 + parentOffsetLeft
  )
  return isNaN(calc) ? 0 : calc
}

/**
 * @typedef {Object} isOutViewPort
 * @property {bool} left - left
 * @property {bool} top - top
 * @property {bool} right - right
 * @property {bool} bottom - bottom
 * @property {bool} any - any
 * @property {bool} all - all
 * */

/**
 * Check if an element is out of viewport
 * @param {node} elem The element
 * @return {isOutViewPort} an object with properties
 */
export const isOutOfViewport = elem => {
  const out = {}
  out.top = elem.top < 0
  out.left = elem.left < 0
  out.bottom =
    elem.bottom >
    (window.innerHeight ||
      document.documentElement.clientHeight)
  out.right =
    elem.right >
    (window.innerWidth ||
      document.documentElement.clientWidth)
  out.any = out.top || out.left || out.bottom || out.right
  out.all = out.top && out.left && out.bottom && out.right

  return out
}

/**
 * Element boundings
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
  const { top, bottom, height } = rect
  const parentNode = element.parentNode
  const clientHeight = document.documentElement.clientHeight

  if (rect.bottom < 0) return false

  if (top > clientHeight) return false
  do {
    rect = getBoundings(parentNode)
    if (top <= bottom === false) return false
    if (top + height <= top) return false
  } while (parentNode !== document.body)

  return true
}
