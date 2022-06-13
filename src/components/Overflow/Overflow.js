import PropTypes from 'prop-types'
import React from 'react'
import styles from './Overflow.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Overflow - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - childrens
 * @param {string|array} props.className - list of class names
 * @return {object} An object of children element
 */
const Overflow = ({ children, className }) => {
  const elementClasses = useStyles(
    {
      [styles['overflow']]: true
    },
    className
  )

  return <div className={elementClasses}>{children}</div>
}

Overflow.displayName = 'Overflow'

Overflow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

Overflow.defaultProps = {
  children: null,
  className: ''
}

export default Overflow
