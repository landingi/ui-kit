import { useEffect } from 'react'

export const useDetectOutsideClick = (ref, handler) => {
  const listener = event => {
    event.stopPropagation()

    if (!ref.current || ref.current.contains(event.target)) {
      return null
    }

    handler(false)

    return null
  }

  useEffect(() => {
    document.addEventListener('mousedown', listener)

    return () => document.removeEventListener('mousedown', listener)
  }, [])

  return null
}
