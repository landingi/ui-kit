import { useState } from 'react'

export const useForceUpdate = () => {
  const [count, setCount] = useState(0),
    increment = () => setCount(prevCount => prevCount + 1)

  return [increment, count]
}
