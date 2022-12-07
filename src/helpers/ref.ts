export const composeRefs =
  (...args: any[]): ((element: HTMLElement | null) => void) =>
  (ref: HTMLElement | null) => {
    args.forEach(arg => {
      if (!arg) {
        return
      }

      if (typeof arg === 'function') {
        arg(ref)

        return
      }

      arg.current = ref
    })
  }
