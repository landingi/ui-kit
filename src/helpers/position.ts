export const centerParent = (
  parentWidth: number,
  childWidth: number,
  parentOffsetLeft: number
) => {
  const calc = Math.floor(parentWidth / 2 - childWidth / 2 + parentOffsetLeft)
  return calc || 0
}

export const getBoundings = (element: HTMLElement) =>
  element.getBoundingClientRect()
