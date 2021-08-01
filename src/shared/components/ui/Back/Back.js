import React from 'react'
import PropTypes from 'prop-types'
import Button from '@components/ui/Button'
import Tooltip from '@components/ui/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import { getLocationPath } from '@helpers/url'
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
  const location = getLocationPath()
  const urlMap = location.match(
    '/payments/subscription/cancel'
  )
    ? '/payments/subscription'
    : url

  return (
    <span className={cssClass(className)}>
      <a href={urlMap}>
        <Tooltip content={content} placement="bottom">
          <Button variant="icon">
            <FontAwesomeIcon icon="arrow-left" />
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
   * Url
   */
  url: PropTypes.string,
  /**
   * Content
   */
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
Back.defaultProps = {
  className: 'back',
  url: '',
  content: ''
}

export default Back
