import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './BoxBackground.module.scss'

/**
 * Box Background - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - children element
 * @param {string} props.variant - variant
 * @return {object} An object of children element
 */
const BoxBackground = ({ className, children, variant }) => {
  const elementClasses = useStyles(
    {
      [styles['boxBackground']]: true,
      [styles[`boxBackground--${variant}`]]: variant
    },
    className
  )

  return <span className={elementClasses}>{children}</span>
}

BoxBackground.displayName = 'BoxBackground'

BoxBackground.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'alert', 'progress', 'info'])
    .isRequired
}

BoxBackground.defaultProps = {
  className: ''
}

export default BoxBackground
