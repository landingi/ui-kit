import { FC, ReactElement } from 'react'

import styles from './ButtonGroup.module.scss'
import { ButtonGroupProvider } from './context'

export interface ButtonGroupProps {
  children: ReactElement[]
  initialValue?: string
  onChange: () => void
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  initialValue = null,
  onChange
}) => (
  <ButtonGroupProvider initialValue={initialValue} onChange={onChange}>
    <div className={styles.wrapper}>{children}</div>
  </ButtonGroupProvider>
)

ButtonGroup.displayName = 'ButtonGroup'
