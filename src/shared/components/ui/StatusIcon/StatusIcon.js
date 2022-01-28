import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './StatusIcon.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Status Icon - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `status-icon`
 * @param {string} props.variant - variant of statusIcon active, inactive
 * @param {string} props.size - variant of statusIcon tiny, medium
 */
const StatusIcon = ({ className, variant, size }) => {
  const statusIconStyles = useStyles(
    {
      [styles['status-icon']]: true,
      [styles[`status-icon--${variant}`]]: variant,
      [styles[`status-icon--${size}`]]: size
    },
    className
  )

  return (
    <div data-testid='status-icon' className={statusIconStyles}>
      {variant === 'active' ? (
        <FontAwesomeIcon icon='check' size='xs' />
      ) : (
        <FontAwesomeIcon icon='times' size='xs' />
      )}
    </div>
  )
}

StatusIcon.displayName = 'Status Icon'

StatusIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'medium']),
  variant: PropTypes.oneOf(['active', 'inactive'])
}

StatusIcon.defaultProps = {
  className: 'status-icon',
  size: 'medium',
  variant: 'active'
}

export default StatusIcon
