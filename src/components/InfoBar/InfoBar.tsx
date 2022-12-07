import { Icon } from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './InfoBar.module.scss'

export interface InfoBarProps {
  children: ReactNode
  className?: string | string[]
  type?: 'warning' | 'info' | 'alert'
}

const InfoBar: FC<InfoBarProps> = ({
  children,
  className = '',
  type = 'info'
}) => {
  const elementClasses = useStyles(
    {
      [styles[`info-bar`]]: true,
      [styles[`info-bar--${type}`]]: type
    },
    className
  )

  const boxClasses = useStyles({
    [styles[`info-bar--box`]]: true,
    [styles[`info-bar--${type}-box`]]: type
  })

  const icon = {
    warning: 'icon-exclamation',
    alert: 'icon-exclamation-triangle',
    info: 'icon-info'
  }[type]

  return (
    <div data-testid='infobar-wrapper' className={elementClasses}>
      <div className={boxClasses}>
        <Icon icon={icon} />
      </div>

      <div className={styles.info__bar}>{children}</div>
    </div>
  )
}

InfoBar.displayName = 'InfoBar'

export default InfoBar
