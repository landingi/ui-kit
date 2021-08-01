import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './ColorLine.scss'

const cssClass = styles(scss)

/**
 * Color line - stateless presentational component
 * @param {object} props - props
 * @param {string} props.variant - variant
 * @param {string} props.alignment - alignment
 * @return {object} An object of children element
 */
const colorLine = ({ variant, alignment }) => (
  <span
    className={cssClass(
      'color-line',
      `color-line--${variant}`,
      `color-line--${alignment}`
    )}
  />
)

/**
 * Display name
 * @type {string}
 */
colorLine.displayName = 'Color line'

/**
 * The properties.
 * @type {Object}
 */
colorLine.propTypes = {
  /**
   * Alignment
   */
  alignment: PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * Variant
   */
  variant: PropTypes.oneOf([
    'alert',
    'warning',
    'success',
    'info'
  ]).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
colorLine.defaultProps = {
  alignment: 'vertical'
}
export default colorLine
