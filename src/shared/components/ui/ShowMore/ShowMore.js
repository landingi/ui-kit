import { FormattedMessage, injectIntl } from 'react-intl'
import Html from 'shared/components/global/Html'
import Loader from '@components/ui/Loader'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import Spacer from '@components/ui/Spacer'
import scss from './ShowMore.scss'

/**
 * Show more/less - stateful presentational component
 * @param {Object} props - props
 * @param {String} props.content - content to display
 * @param {Object} props.intl - react-intl object
 * @param {Object} props.extraClassname
 * @param {object} props.children - children
 * @return {Object} An object of children element
 */
const showMore = ({ content, intl, extraClassname, children }) => {
  const [isOpen, setIsOpen] = useState(false),
    [display, setDisplay] = useState('none'),
    [text, setText] = useState(''),
    handleOnClick = useCallback(
      event => {
        event.preventDefault()

        setIsOpen(current => !current)

        setDisplay(display !== 'none' ? 'none' : null)
      },
      [isOpen]
    )

  useEffect(() => {
    const text = intl.formatMessage({ id: content })

    !isOpen
      ? setText(`${text.replace(/^(.{170}[^\s]*).*/, '$1')}...`)
      : setText(text)
  }, [isOpen])

  return text ? (
    <div className={scss.container}>
      <Html className={extraClassname} value={text} />

      <button className={scss.button} onClick={handleOnClick} type='button'>
        {isOpen ? (
          <FormattedMessage id='show.less' />
        ) : (
          <FormattedMessage id='show.more' />
        )}
      </button>

      <Spacer space='small' />

      {isOpen && children ? children || null : null}
    </div>
  ) : (
    <Loader />
  )
}

/**
 * Display name
 * @type {string}
 */
showMore.displayName = 'Show more/less'

/**
 * The properties.
 * @type {Object}
 */
showMore.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node,

  /**
   * Content
   */
  content: PropTypes.string.isRequired,

  /**
   * Extraclassname
   */
  extraClassname: PropTypes.string,

  /**
   * Intl from react-intl
   */
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

/**
 * Default props.
 * @type {Object}
 */
showMore.defaultProps = {
  children: null
}

export default injectIntl(showMore)
