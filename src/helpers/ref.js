/**
 * composeRefs func - help with composing multiple refs in React functional components
 * eg. <Input ref={composeRefs(ref1,ref2)}/>
 * @param  {...any} args
 * @return {object}
 */
export const composeRefs = (...args) => {
  return ref => {
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
}
