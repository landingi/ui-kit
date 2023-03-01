import { Search, SearchProps } from '@components/Search'
import { NO_VALUE } from '@constants/helpers'
import { ChangeEvent, FC, useCallback } from 'react'

interface SearcherProps extends SearchProps {
  setSearchResult?: (value?: unknown) => void
  searchFunction?: (value?: string) => Promise<unknown>
  setSearchPhrase?: (value?: string) => void
  i18n?: {
    placeholder?: string
    label?: string
  }
  protectedSubmit?: boolean
  liveChanges?: boolean
}

export const Searcher: FC<SearcherProps> = ({
  setSearchResult,
  searchFunction,
  setSearchPhrase,
  i18n = {
    placeholder: '',
    label: ''
  },
  protectedSubmit,
  liveChanges,
  ...rest
}) => {
  const search = async (value?: string) => {
    if (searchFunction && setSearchResult) {
      const response = await searchFunction(value)

      setSearchResult(response)
    }
  }

  const handleOnChange = useCallback(
    (event?: ChangeEvent<HTMLInputElement>) => {
      let value
      !event ? (value = '') : (value = event.target.value)

      if (setSearchPhrase) {
        !value && setSearchPhrase('')
        value && liveChanges && setSearchPhrase(value)
      } else {
        !value && setSearchResult && setSearchResult(NO_VALUE)
      }
    },
    [liveChanges]
  )

  const handleOnSubmit = useCallback((event?: string) => {
    if (setSearchPhrase) {
      setSearchPhrase(event)
    } else {
      search(event)
    }
  }, [])

  const handleOnProtectedSubmit = useCallback((event?: string) => {
    if (setSearchPhrase) {
      setSearchPhrase(event)
    }
  }, [])

  return (
    <Search
      onChange={handleOnChange}
      onProtectedSubmit={protectedSubmit ? handleOnProtectedSubmit : undefined}
      onSubmit={protectedSubmit ? undefined : handleOnSubmit}
      i18n={i18n}
      {...rest}
    />
  )
}

Searcher.displayName = 'Searcher'
