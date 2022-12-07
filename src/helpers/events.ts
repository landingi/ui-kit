export const throttle = (func: Function, interval: number) => {
  let timeout: boolean

  return (...args: unknown[]) => {
    const later = () => {
      timeout = false
    }

    if (!timeout) {
      func.apply(this, args)
      timeout = true
      setTimeout(later, interval)
    }
  }
}

export const debounce = (func: Function, interval: number) => {
  let timeout: NodeJS.Timeout

  return (...args: unknown[]) => {
    const context = () => func.apply(this, args)
    clearTimeout(timeout)
    timeout = setTimeout(context, interval)
  }
}
