import { Icon } from '@components/Icon'
import { Tooltip } from '@components/Tooltip'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './StatusIcon.module.scss'

interface StatusIconProps {
  className?: string | string[]
  variant?: 'active' | 'inactive' | 'warning'
  size?: 'tiny' | 'medium' | 'big'
  tooltip?: string
}

export const StatusIcon: FC<StatusIconProps> = ({
  className = '',
  variant = 'active',
  size = 'medium',
  tooltip = ''
}) => {
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
