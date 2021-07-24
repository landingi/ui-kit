import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Html.scss'
import createDOMPurify from 'dompurify'

const DOMPurify = createDOMPurify(window)

const cssClass = styles(scss)

const html = ({ className, value }) => (
  <span
    className={cssClass(className)}
    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}
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
