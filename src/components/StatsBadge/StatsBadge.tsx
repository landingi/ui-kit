import { Heading } from '@components/Heading'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './StatsBadge.module.scss'

export interface StatsBadgeProps {
  className?: string | string[]
  color?: 'green' | 'yellow' | 'pink'
  quantity?: number
  description: string
}

export const StatsBadge: FC<StatsBadgeProps> = ({
  className = '',
  color = 'green',
  quantity = 0,
  description
}) => {
  const badgeStyles = useStyles(
    {
      [styles.container]: true,
      [styles[`container--${color}`]]: color
    },
    className
  )
  const descriptionStyles = useStyles({
    [styles['container--description']]: true
  })

  return (
    <div data-testid='badge' className={badgeStyles}>
      <div className={descriptionStyles}>
        <Heading level={2} margin='none'>
          {quantity}
        </Heading>

        <Heading level={5}>{description}</Heading>
      </div>
    </div>
  )
}

StatsBadge.displayName = 'StatsBadge'
