import { RowActionsProps } from '@components/Table/types'
import { isSafari } from '@helpers/browser'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Body.module.scss'

export const RowActions: FC<RowActionsProps> = ({ height, children }) => {
  const trRowActionsStyles = useStyles({
    [styles['tr__row-actions']]: true,
    // special fix ONLY for safari
    [styles['tr__row-actions--safari']]: isSafari
  })

  return (
    <td
      className={trRowActionsStyles}
      style={{
        // special fix ONLY for safari
        height
      }}
    >
      {children}
    </td>
  )
}
