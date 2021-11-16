import { useEffect } from 'react'

export const useClickOutside = (ref, callback) => {
  const handleClick = ({ target }) => {
    if (ref.current && !ref.current.contains(target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
