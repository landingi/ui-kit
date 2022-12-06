import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './ButtonGroup.module.scss'
import { useButtonGroupContext } from './context'

export interface ButtonProps {
  children: ReactNode
  id: string
  isDisabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  id,
  isDisabled = false
}) => {
  const { selected, setSelected } = useButtonGroupContext()

  const buttonStyles = useStyles({
    [styles.button]: true,
    [styles[`button--active`]]: selected === id,
    [styles[`button--disabled`]]: isDisabled
  })

  const handleChange = () => setSelected(id)

  return (
    <button
      className={buttonStyles}
      onClick={handleChange}
      disabled={isDisabled}
      type='button'
    >
      {children}
    </button>
  )
}

Button.displayName = 'ButtonGroupButton'
