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
