import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import { useTabContext } from './context'
import styles from './Tabs.module.scss'

interface TabPanelProps {
  name: string
  className?: string | string[]
  children: ReactNode
}

export const TabPanel: FC<TabPanelProps> = ({
  name,
  className,
  children,
  ...restProps
}) => {
  const { activeTab } = useTabContext()

  const tabPanelStyles = useStyles({ [styles.tab__panel]: true }, className)

  if (activeTab === name) {
    return (
      <div className={tabPanelStyles} {...restProps}>
        {children}
      </div>
    )
  }

  return null
}

TabPanel.displayName = 'TabPanel'
