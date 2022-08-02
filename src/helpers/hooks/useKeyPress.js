import { useEffect } from 'react'

export const useKeyPress = (targetKey, callback) => {
  const handleKeyDown = ({ key }) => {
    if (key === targetKey) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })
}
