import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import { TabProvider } from './context'
import styles from './Tabs.module.scss'

interface TabsProps {
  initialValue: string
  className?: string | string[]
  children: ReactNode
}

export const Tabs: FC<TabsProps> = ({
  initialValue,
  className = '',
  children,
  ...restProps
}) => {
  const tabsStyles = useStyles({ [styles.tabs__wrapper]: true }, className)

  return (
    <TabProvider initialValue={initialValue}>
      <div className={tabsStyles} {...restProps}>
        {children}
      </div>
    </TabProvider>
  )
}

Tabs.displayName = 'Tabs'
