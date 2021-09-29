import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './ColorNumber.scss'

const cssClass = styles(scss),
  /**
   * ColorNumber - stateless presentational component
   * @param {object} props - props
   * @param {object} props.children - children
   * @param {string} props.color - color
   * @param {number} props.size - size
   * @return {object} An object of children element
   */

  colorNumber = ({ children, variant, size }) => (
    <span
      className={cssClass(
        'color-number',
        `color-number__color--${variant}`,
        `color-number__size--${size}`
      )}
    >
      {children}
    </span>
  )

/**
 * Display name
 * @type {string}
 */
colorNumber.displayName = 'ColorNumber'

/**
 * The properties.
 * @type {Object}
 */
colorNumber.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node.isRequired,

  /**
   * Size, default `18`
   */
  size: PropTypes.oneOf([16, 18, 32, 44, 62]),

  /**
   * Color
   */
  variant: PropTypes.oneOf([
    'alert',
    'warning',
    'success',
    'default',
    'progress',
    'info'
  ]).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
colorNumber.defaultProps = {
  size: 18
}

export default colorNumber
