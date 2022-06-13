import { useEffect, useRef } from 'react'

/**
 * useUpdateEffect - rerender component only when dependency array changed
 * @param {function} props.effect - function to call
 * @param {array} props.dependencies - dependency array
 * @return {object}
 */
export const useUpdateEffect = (effect, dependencies = []) => {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      effect()
    }
  }, dependencies)
}
