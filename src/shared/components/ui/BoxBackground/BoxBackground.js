import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './BoxBackground.module.scss'

/**
 * Box Background - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children element
 * @param {string} props.variant - variant
 * @return {object} An object of children element
 */
const BoxBackground = ({ children, variant }) => {
  const elementClasses = useStyles({
    [styles['boxBackground']]: true,
    [styles[`boxBackground--${variant}`]]: variant
  })

  return <span className={elementClasses}>{children}</span>
}

BoxBackground.displayName = 'BoxBackground'

BoxBackground.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'alert', 'progress', 'info'])
    .isRequired
}

export default BoxBackground
