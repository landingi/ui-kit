import Icon from '@components/Icon'
import Tooltip from '@components/Tooltip'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './StatusIcon.module.scss'

/**
 * Status Icon - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {string} props.variant - variant of status icon, active
 * @param {string} props.size - variant of status icon tiny, medium
 * @param {string} props.tooltip - tooltip of status icon
 */
const StatusIcon = ({ className, variant, size, tooltip }) => {
  const statusIconStyles = useStyles(
    {
      [styles['status-icon']]: true,
      [styles[`status-icon--${variant}`]]: variant,
      [styles[`status-icon--${size}`]]: size
    },
    className
  )

  const variantsIcons = {
    active: 'icon-ok',
    inactive: 'icon-remove',
    warning: 'icon-exclamation'
  }

  return (
    <Tooltip
      content={tooltip}
      placement='top'
      align='center'
      disabled={!tooltip}
    >
      <div data-testid='status-icon' className={statusIconStyles}>
        <Icon icon={variantsIcons[variant]} autoSize />
      </div>
    </Tooltip>
  )
}

StatusIcon.displayName = 'StatusIcon'

StatusIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'medium', 'big']),
  variant: PropTypes.oneOf(['active', 'inactive', 'warning']),
  tooltip: PropTypes.string
}

StatusIcon.defaultProps = {
  className: '',
  size: 'medium',
  variant: 'active',
  tooltip: ''
}

export default StatusIcon
