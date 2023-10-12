import { Button } from '@components/Button'
import { useQueryString } from '@helpers/hooks/useQueryString'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, MouseEvent, ReactNode, useCallback } from 'react'

import { useTabContext } from './context'
import styles from './Tabs.module.scss'

interface TabProps {
  name: string
  onClick: (event: MouseEvent<HTMLSpanElement>) => void
  className?: string | string[]
  children: ReactNode
  isDisabled?: boolean
}

export const Tab: FC<TabProps> = ({
  name,
  className,
  onClick = () => {},
  children,
  isDisabled = false,
  ...restProps
}) => {
  const { activeTab, changeTab } = useTabContext()
  const [, setTabValue] = useQueryString('tab')

  const tabStyles = useStyles(
    {
      [styles.tab]: true,
      [styles['tab--active']]: activeTab === name
    },
    className
  )

  const handleClick = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      setTabValue(name)
      changeTab(name)
      onClick(event)
    },
    [onClick, name, changeTab, setTabValue]
  )

  const handleDisabledTabClick = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => onClick(event),
    [onClick]
  )

  return (
    <span
      className={tabStyles}
      onClick={isDisabled ? handleDisabledTabClick : handleClick}
      data-testid='tab-button'
      {...restProps}
    >
      <Button variant='tabs'>{children}</Button>
    </span>
  )
}

Tab.displayName = 'Tab'
