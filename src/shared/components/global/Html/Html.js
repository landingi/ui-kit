import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import createDOMPurify from 'dompurify'
import scss from './Html.scss'

const isBrowser = typeof window !== "undefined"

const DOMPurify = isBrowser && createDOMPurify(window)
const cssClass = styles(scss)
const html = ({ className, value }) => (
    <span
      className={cssClass(className)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(value)
      }}
    />
  )
/**
 * Display name
 * @type {string}
 */
html.displayName = 'HTML element'

/**
 * The default properties.
 * @type {Object}
 */
html.defaultProps = {
  className: 'html'
}

/**
 * The properties.
 * @type {Object}
 */
html.propTypes = {
  /**
   * Classname, default `html`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
}

export default html
