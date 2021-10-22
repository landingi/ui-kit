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
const searcher = ({
  setSearchResult,
  searchFunction,
  setSearchPhrase,
  i18n,
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

  const handleOnProtectedSubmit = useCallback(event => setSearchPhrase(event), [])

  return (
    <Search
      onChange={handleOnChange}
      onProtectedSubmit={protectedSubmit ? handleOnProtectedSubmit : null}
      onSubmit={protectedSubmit ? null : handleOnSubmit}
      i18n={i18n.placeholder}
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
  liveChanges: PropTypes.bool,
  placeholder: PropTypes.string,
  protectedSubmit: PropTypes.bool,
  searchFunction: PropTypes.func,
  setSearchPhrase: PropTypes.func,
  setSearchResult: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
searcher.defaultProps = {
  liveChanges: false,
  i18n: {
    placeholder: null
  },
  protectedSubmit: false,
  setSearchPhrase: null,
  searchFunction: () => null,
  setSearchResult: () => null
}

export default memo(searcher)
