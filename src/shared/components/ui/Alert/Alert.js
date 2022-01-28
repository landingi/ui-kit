import Icon from '@components/ui/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Alert.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'
import { mapIconToClass } from '@helpers/data'

/**
 * Alert - stateless presentational component
 * @param {object} props - props
 * @param {node|string|object} props.children - children
 * @param {string|array} props.className - list of class names
 * @param {string} props.type - type of alert message
 * @return {object} An object of children element
 */
const Alert = ({ children, className, type }) => {
  const alertStyles = useStyles(
    {
      [styles['alert-message']]: true,
      [styles[`alert-message--${type}`]]: type
    },
    className
  )

  return (
    <div className={alertStyles}>
      <Icon icon={mapIconToClass(type)} color={type} />

      <div className={styles.alert__message}>{children}</div>
    </div>
  )
}

Alert.displayName = 'Alert'

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.oneOf(['info', 'success', 'warning', 'alert'])
}

Alert.defaultProps = {
  className: '',
  type: 'info'
}

export default Alert
