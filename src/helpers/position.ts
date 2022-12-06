export const centerParent = (
  parentWidth: number | string,
  childWidth: number | string,
  parentOffsetLeft: number | string
) => {
  if (
    typeof parentWidth !== 'number' ||
    typeof childWidth !== 'number' ||
    typeof parentOffsetLeft !== 'number'
  ) {
    return 0
  }

  const calc = Math.floor(parentWidth / 2 - childWidth / 2 + parentOffsetLeft)

  return calc
}

export const getBoundings = (element: HTMLElement) =>
  element.getBoundingClientRect()
