import { useEffect } from 'react'

export const useKeyPress = (targetKey: string, callback: () => void) => {
  const handleKeyDown = ({ key }: KeyboardEvent) => {
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
