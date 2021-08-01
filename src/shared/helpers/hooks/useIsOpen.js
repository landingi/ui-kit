import { useState, useCallback } from 'react'

const useIsOpen = initial => {
  const [value, setValue] = useState(initial)

  return {
    value,
    setValue,
    set: useCallback(item =>
      setValue(arr => {
        if (arr.includes(item)) {
          return []
        }
        return [item]
      })
    ),
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
    )
  }
}

export default useIsOpen
