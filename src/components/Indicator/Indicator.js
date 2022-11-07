import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Indicator.module.scss'

/**
 * Indicator - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.content - content
 * @param {boolean} props.isAlert
 * @param {string|array} props.className - list of class names
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */
const Indicator = ({ children, className, content, isAlert, onClick }) => {
  const elementStyles = useStyles(
    {
      [styles.indicator]: true
    },
    className
  )

  const indicatorStyles = useStyles(
    {
      [styles.indicator__element]: true,
      [styles['indicator__element--isAlert']]: isAlert
    },
    className
  )

  return (
    <span className={elementStyles} onClick={onClick}>
      <span className={indicatorStyles}>{content}</span>

      {children}
    </span>
  )
}

Indicator.displayName = 'Indicator'

Indicator.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  content: PropTypes.string,
  isAlert: PropTypes.bool,
  onClick: PropTypes.func
}

Indicator.defaultProps = {
  content: null,
  isAlert: false,
  onClick: () => {}
}

export default Indicator
