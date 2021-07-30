import { useEffect, useRef } from 'react'

/**
 * useInterval
 * @param {function} callback - callback function to call when the useInterval is called
 * @param {number} delay - delay of setInterval
 */
export const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
