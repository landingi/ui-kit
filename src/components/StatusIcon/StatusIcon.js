import PropTypes from 'prop-types'
import React from 'react'
import styles from './StatusIcon.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'
import Icon from '@components/Icon'

/**
 * Status Icon - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
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
        <Icon icon='icon-ok' />
      ) : (
        <Icon icon='icon-remove' />
      )}
    </div>
  )
}

StatusIcon.displayName = 'StatusIcon'

StatusIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'medium', 'big']),
  variant: PropTypes.oneOf(['active', 'inactive'])
}

StatusIcon.defaultProps = {
  className: '',
  size: 'medium',
  variant: 'active'
}

export default StatusIcon
