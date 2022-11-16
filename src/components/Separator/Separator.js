import Spreader from '@components/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Separator.module.scss'

/**
 * Separator - stateless presentational component
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - children
 * @param {string} props.size - size
 * @param {string} props.color - color
 * @return {object} An object of children element
 */
const Separator = ({ className, children, size, color }) => {
  const elementClasses = useStyles(
    {
      [styles.separator__divider]: true,
      [styles[`separator__divider--${size}`]]: size,
      [styles[`separator__divider--${color}`]]: color
    },
    className
  )

  return (
    <div className={styles.separator}>
      <div className={elementClasses} />

      <Spreader spread='tiny' />

      {children}

      <Spreader spread='tiny' />

      <div className={elementClasses} />
    </div>
  )
}

Separator.displayName = 'Separator'

Separator.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['medium']),
  color: PropTypes.string
}

Separator.defaultProps = {
  className: '',
  size: 'medium',
  color: 'color-4'
}

export default Separator
