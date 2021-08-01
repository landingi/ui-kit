import React, { useCallback, memo } from 'react'
import PropTypes from 'prop-types'
import Search from '@components/ui/Search'
import { NO_VALUE } from '@constants/helpers'

/**
 * Searcher - stateful presentational component
 * @param {object} props - props
 * @param {function} props.setSearchResult - search result setter
 * @param {function} props.searchFunction - search function
 * @param {function} props.setSearchPhrase - search phrase function
 * @param {string} props.placeholder - placeholder
 * @param {bool} props.protectedSubmit - protectedSubmit
 * @param {bool} props.liveChanges - search by entering characters
 * @return {object} An object of children element
 */
const searcher = ({
  setSearchResult,
  searchFunction,
  setSearchPhrase,
  placeholder,
  protectedSubmit,
  liveChanges,
  ...rest
}) => {
  const search = async value => {
    try {
      const response = await searchFunction(value)

      setSearchResult(response)
    } catch {}
  }

  const handleOnChange = useCallback(event => {
    let value
    !event ? (value = '') : (value = event.target.value)

    if (setSearchPhrase) {
      !value && setSearchPhrase('')
      value && liveChanges && setSearchPhrase(value)
    } else {
      !value && setSearchResult(NO_VALUE)
    }
  })

  const handleOnSubmit = useCallback(event => {
    if (setSearchPhrase) {
      setSearchPhrase(event)
    } else {
      search(event)
    }
  })

  const handleOnProtectedSubmit = useCallback(
    event => setSearchPhrase(event),
    []
  )

  return (
    <Search
      onChange={handleOnChange}
      onProtectedSubmit={
        protectedSubmit ? handleOnProtectedSubmit : null
      }
      onSubmit={protectedSubmit ? null : handleOnSubmit}
      placeholder={placeholder}
      {...rest}
    />
  )
}

/**
 * Display name
 * @type {string}
 */
searcher.displayName = 'Searcher'

/**
 * The properties.
 * @type {Object}
 */
searcher.propTypes = {
  /**
   * Search result setter
   */
  setSearchResult: PropTypes.func,
  setSearchPhrase: PropTypes.func,
  searchFunction: PropTypes.func,
  placeholder: PropTypes.string,
  protectedSubmit: PropTypes.bool,
  liveChanges: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
searcher.defaultProps = {
  setSearchResult: () => null,
  setSearchPhrase: null,
  searchFunction: () => null,
  placeholder: 'word.search',
  protectedSubmit: false,
  liveChanges: false
}

export default memo(searcher)
