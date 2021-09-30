import {
  getQueryStringValue,
  setQueryStringValue
} from '@helpers/queryString'
import { useCallback, useState } from 'react'

const useQueryString = (key, initialValue) => {
  const [value, setValue] = useState(
      getQueryStringValue(key) || initialValue
    ),
    onSetValue = useCallback(
      newValue => {
        setValue(newValue)
        setQueryStringValue(key, newValue)
      },
      [key]
    )

  return [value, onSetValue]
}

export default useQueryString
