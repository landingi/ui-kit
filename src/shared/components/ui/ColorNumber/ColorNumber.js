import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './ColorNumber.module.scss'

/**
 * ColorNumber - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - children
 * @param {string} props.color - color
 * @param {number} props.size - size
 * @return {object} An object of children element
 */
const ColorNumber = ({ className, children, variant, size }) => {
  const elementClasses = useStyles(
    {
      [styles['color-number']]: true,
      [styles[`color-number__color--${variant}`]]: variant,
      [styles[`color-number__size--${size}`]]: size
    },
    className
  )

  return <span className={elementClasses}>{children}</span>
}

ColorNumber.displayName = 'ColorNumber'

ColorNumber.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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

ColorNumber.defaultProps = {
  className: '',
  size: 18
}

export default ColorNumber
