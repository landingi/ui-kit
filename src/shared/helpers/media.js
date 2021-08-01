/**
 * Check if matches provided media breakpoint
 * @param {number} Breakpoint
 * @return {bool}
 */
export const isMediaQuery = breakpoint =>
  window.matchMedia(`(max-width: ${breakpoint}px)`).matches

/**
 * Check if screen width is between breakpoints
 * @param {number} leftBreakpoint - must be smaller than rightBreakpoint, otherwise function returns false
 * @param {number} rightBreakpoint
 * @return {bool}
 */
export const isScreenSizeBetweenBreakpoints = (
  leftBreakpoint,
  rightBreakpoint
) => {
  if (leftBreakpoint > rightBreakpoint) return false

  return (
    !isMediaQuery(leftBreakpoint) &&
    isMediaQuery(rightBreakpoint)
  )
}
