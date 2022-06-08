import { useCallback, useState } from 'react'

const useIsOpen = initial => {
  const [value, setValue] = useState(initial)

  return {
    set: useCallback(item =>
      setValue(arr => {
        if (arr.includes(item)) {
          return []
        }
        return [item]
      })
    ),
    setValue,
    toggle: useCallback(item =>
      setValue(arr => {
        if (arr.includes(item)) {
          return arr.filter(value => value !== item)
        }
        return [...arr, item]
      })
    ),
    toggleOneElement: useCallback(() =>
      setValue(value => {
        if (value) {
          return false
        }
        return true
      })
    ),
    value
  }
}

export default useIsOpen
