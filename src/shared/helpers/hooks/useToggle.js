import { useCallback, useState } from 'react'

/**
 * UseToggle - stateful presentational component
 * @param {object} props - props
 * @param {bool} props.initialValue - default value of the state `true`
 * @return {object}
 */
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue),
    toggle = useCallback(() => {
      setValue(data => !data)
    }, [])

  return [value, toggle]
}

export default useToggle
