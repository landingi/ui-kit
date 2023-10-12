import { Spinner } from '@components/Spinner'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, MouseEvent, ReactNode } from 'react'
import Ink from 'react-ink'

import styles from './Button.module.scss'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'secondary-outlined'
  | 'dropdown'
  | 'transparent'
  | 'icon'
  | 'icon-transparent'
  | 'icon-transparent-hover'
  | 'alert'
  | 'clean'
  | 'tabs'
  | 'transparent-blue'
  | 'dropdown-element'
  | 'action'
  | 'white'
  | 'black'
  | 'publish'
  | 'switcher-brand'

export interface ButtonProps {
  id?: string
  className?: string | string[]
  tag?: 'button' | 'a'
  title?: string
  type?: 'button' | 'submit' | 'reset'
  href?: string
  size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'input'
  variant?: ButtonVariant
  align?: 'left' | 'center' | 'right'
  target?: '_self' | '_blank' | '_parent' | '_top'
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  isLoading?: boolean
  isDisabled?: boolean
  hasBackgoundRipple?: boolean
  hasIcon?: boolean
  hide?: boolean
  buttonStyle?: boolean
  fitWidth?: boolean
  customStyle?: {
    borderRadius: string
    boxShadow: string
  }
  customEnabledBackgroundColor?: string
  'data-testid'?: string
  isActive?: boolean
}

const Button: FC<ButtonProps> = ({
  id,
  className = '',
  tag: Tag = 'button',
  title,
  type = 'button',
  href,
  size = 'medium',
  variant = 'primary',
  align,
  target,
  children,
  onClick,
  isLoading = false,
  isDisabled = false,
  hasBackgoundRipple = true,
  hasIcon = false,
  hide = false,
  buttonStyle,
  fitWidth = false,
  customStyle,
  customEnabledBackgroundColor,
  'data-testid': dataTestId,
  isActive = false
}) => {
  const elementClassesButton = useStyles(
    {
      [styles.button]: true,
      [styles[`button--${variant}`]]: variant,
      [styles[`button--${variant}--loading`]]: variant && isLoading,
      [styles[`button--${variant}--active`]]: variant && isActive,
      [styles[`button--${size}`]]: size,
      [styles[`button--${align}`]]: align,
      [styles['button--svg']]: hasIcon === true,
      [styles['button--hide']]: hide === true,
      [styles['button--fit-width']]: fitWidth === true,
      [styles.link]: !buttonStyle && Tag === 'a'
    },
    className
  )

  return (
    <Tag
      id={id}
      type={Tag === 'button' ? type : undefined}
      disabled={isDisabled}
      href={Tag === 'a' ? href : undefined}
      title={Tag === 'a' ? title : undefined}
      target={Tag === 'a' ? target : undefined}
      className={elementClassesButton}
      onClick={onClick}
      data-testid={dataTestId}
      style={{
        borderRadius: customStyle?.borderRadius,
        boxShadow: customStyle?.boxShadow,
        backgroundColor: isDisabled ? undefined : customEnabledBackgroundColor
      }}
    >
      {isLoading && <Spinner />}

      {!isLoading && children}

      {hasBackgoundRipple && <Ink />}
    </Tag>
  )
}

Button.displayName = 'Button'

export default Button
