import { useStyles } from '@helpers/hooks/useStyles'
import { FC, MouseEventHandler, ReactNode } from 'react'

import styles from './CustomLink.module.scss'

interface CustomLinkProps {
  className?: string | string[]
  variant?: 'active' | 'inactive' | 'dark' | 'grey'
  label: ReactNode
  href?: string
  target?: string
  size?: 10 | 12 | 14 | 16
  underlined?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
  color?: string
  bold?: boolean
}

export const CustomLink: FC<CustomLinkProps> = ({
  className = '',
  variant = 'active',
  label,
  href,
  target = '_self',
  size = 14,
  underlined = false,
  onClick = () => null,
  color = undefined,
  bold = false
}) => {
  const customLinkStyles = useStyles(
    {
      [styles['custom-link']]: true,
      [styles[`custom-link--${variant}`]]: variant,
      [styles[`custom-link--${size}`]]: size,
      [styles['custom-link--underlined']]: underlined,
      [styles['custom-link--bold']]: bold
    },
    className
  )

  return (
    <a
      data-testid='custom-link'
      className={customLinkStyles}
      href={href}
      onClick={onClick}
      target={target}
      style={{ color }}
    >
      {label}
    </a>
  )
}

CustomLink.displayName = 'CustomLink'
