import { NO_VALUE } from '@constants/helpers'
import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import Search from '@components/ui/Search'

/**
 * Searcher - stateful presentational component
 * @param {object} props - props
 * @param {function} props.setSearchResult - search result setter
 * @param {function} props.searchFunction - search function
 * @param {function} props.setSearchPhrase - search phrase function
 * @param {object} props.i18n - translations
 * @param {bool} props.protectedSubmit - protectedSubmit
 * @param {bool} props.liveChanges - search by entering characters
 * @return {object} An object of children element
 */
const Searcher = ({
  setSearchResult,
  searchFunction,
  setSearchPhrase,
  i18n,
  protectedSubmit,
  liveChanges,
  ...rest
}) => {
  const search = async value => {
    const response = await searchFunction(value)

    setSearchResult(response)
  }

  const handleOnChange = useCallback(
    event => {
      let value
      !event ? (value = '') : (value = event.target.value)

      if (setSearchPhrase) {
        !value && setSearchPhrase('')
        value && liveChanges && setSearchPhrase(value)
      } else {
        !value && setSearchResult(NO_VALUE)
      }
    },
    [liveChanges]
  )

  const handleOnSubmit = useCallback(event => {
    if (setSearchPhrase) {
      setSearchPhrase(event)
    } else {
      search(event)
    }
  }, [])

  const handleOnProtectedSubmit = useCallback(
    event => setSearchPhrase(event),
    []
  )

  return (
    <Search
      onChange={handleOnChange}
      onProtectedSubmit={protectedSubmit ? handleOnProtectedSubmit : null}
      onSubmit={protectedSubmit ? null : handleOnSubmit}
      i18n={i18n}
      {...rest}
    />
  )
}

Searcher.displayName = 'Searcher'

Searcher.propTypes = {
  liveChanges: PropTypes.bool,
  protectedSubmit: PropTypes.bool,
  setSearchPhrase: PropTypes.func,
  searchFunction: PropTypes.func,
  setSearchResult: PropTypes.func,
  i18n: PropTypes.shape({
    placeholder: PropTypes.string
  })
}

Searcher.defaultProps = {
  liveChanges: false,
  i18n: {
    placeholder: ''
  },
  protectedSubmit: false,
  setSearchPhrase: () => null,
  searchFunction: () => null,
  setSearchResult: () => null
}

export default memo(Searcher)
