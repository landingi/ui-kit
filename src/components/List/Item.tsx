import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './List.module.scss'

interface ListItemProps {
  children: ReactNode
  variant?: 'menu' | 'dropdown' | 'table' | 'list' | 'block' | 'inline'
  size?: 'small'
  className?: string | string[]
  margin?: boolean
}

const ListItem: FC<ListItemProps> = ({
  children,
  variant,
  size = '',
  className = '',
  margin = false
}) => {
  const elementClasses = useStyles(
    {
      [styles.list__item]: true,
      [styles[`list-item--${variant}`]]: variant,
      [styles['list-item--margin']]: margin,
      [styles['list-item--small']]: size === 'small'
    },
    className
  )
  return (
    <li className={elementClasses}>
      <div>{children}</div>
    </li>
  )
}

ListItem.displayName = 'ListItem'

export default ListItem
