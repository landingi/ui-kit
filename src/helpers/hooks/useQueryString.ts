import { getQueryStringValue, setQueryStringValue } from '@helpers/queryString'
import { useState } from 'react'

export const useQueryString = (
  key: string,
  initialValue?: string | number
): [
  value: string | number | (string | null)[] | undefined,
  onSetValue: (newValue: string | number) => void
] => {
  const [value, setValue] = useState(getQueryStringValue(key) || initialValue)

  const onSetValue = (newValue: string | number) => {
    setValue(newValue)
    setQueryStringValue(key, newValue)
  }

  return [value, onSetValue]
}
