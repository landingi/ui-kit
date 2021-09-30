import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getLocationPath } from '@helpers/url'
import { styles } from '@helpers/css'
import Button from '@components/ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import Tooltip from '@components/ui/Tooltip'
import scss from './Back.scss'

const cssClass = styles(scss)

/**
 * Back - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: back
 * @param {string} props.url - url, default: ''
 * @param {string} props.content - content, default: ''
 * @return {object} An object of children element
 */
function Back({ className, url, content }) {
  const location = getLocationPath(),
    urlMap = location.match('/payments/subscription/cancel')
      ? '/payments/subscription'
      : url

  return (
    <span className={cssClass(className)}>
      <a href={urlMap}>
        <Tooltip content={content} placement='bottom'>
          <Button variant='icon'>
            <FontAwesomeIcon icon='arrow-left' />
          </Button>
        </Tooltip>
      </a>
    </span>
  )
}

/**
 * Display name
 * @type {string}
 */
Back.displayName = 'Back'

/**
 * The properties.
 * @type {Object}
 */
Back.propTypes = {
  /**
   * Classname, default `back`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),

  /**
   * Content
   */
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Url
   */
  url: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
Back.defaultProps = {
  className: 'back',
  content: '',
  url: ''
}

export default Back
