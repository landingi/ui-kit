import { useState, useCallback } from 'react'

/**
* useToggle - stateful presentational component
* @param {object} props - props
* @param {bool} props.initialValue - default value of the state `true`
* @return {object}
*/
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback(() => {
    setValue(data => !data)
  }, [])

  return [value, toggle]
}

export default useToggle
