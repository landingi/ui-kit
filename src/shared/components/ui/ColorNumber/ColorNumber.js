import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './ColorNumber.scss'

const cssClass = styles(scss)

/**
 * ColorNumber - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.color - color
 * @param {number} props.size - size
 * @return {object} An object of children element
 */
const ColorNumber = ({ children, variant, size }) => (
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

ColorNumber.displayName = 'ColorNumber'

ColorNumber.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'alert',
    'warning',
    'success',
    'default',
    'progress',
    'info',
    'brand',
    'white'
  ]).isRequired,
  size: PropTypes.oneOf([10, 12, 16, 18, 32, 44, 62])
}

colorNumber.defaultProps = {
  size: 18
}

export default colorNumber
