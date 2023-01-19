import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Tabs.module.scss'

interface TabListProps {
  className?: string | string[]
  children: ReactNode
}

export const TabList: FC<TabListProps> = ({
  className,
  children,
  ...restProps
}) => {
  const tabListStyles = useStyles({ [styles.tab__list]: true }, className)

  return (
    <div className={tabListStyles} {...restProps}>
      {children}
    </div>
  )
}

TabList.displayName = 'TabList'
