import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Paragraph.module.scss'

export interface ParagraphProps {
  className?: string | string[]
  children: ReactNode
  color?:
    | 'accent-1'
    | 'accent-2'
    | 'accent-3'
    | 'accent-4'
    | 'accent-5'
    | 'accent-6'
    | 'accent-7'
    | 'info'
    | 'white'
    | 'color-8'
    | 'success'
    | 'brand'
    | 'warning'
  size?: 10 | 12 | 14 | 16 | 18
  align?: 'left' | 'center' | 'right' | 'justify'
  padding?: 'small' | 'medium' | 'none'
  weight?: 300 | 400 | 700
  uppercase?: boolean
  line?: 18 | 20 | 22 | 24 | 28
  decoration?: 'line-through'
}

export const Paragraph: FC<ParagraphProps> = ({
  className = '',
  children,
  color = 'accent-1',
  size = 14,
  align = 'left',
  padding = 'medium',
  weight = 300,
  uppercase = false,
  line = 18,
  decoration
}) => {
  const paragraphStyles = useStyles(
    {
      [styles.paragraph]: true,
      [styles[`paragraph-color--${color}`]]: color,
      [styles[`paragraph-size--${size}`]]: size,
      [styles[`paragraph-padding--${padding}`]]: padding,
      [styles[`paragraph-align--${align}`]]: align,
      [styles[`paragraph-weight--${weight}`]]: weight,
      [styles['paragraph-uppercase']]: uppercase,
      [styles[`paragraph-line--${line}`]]: line,
      [styles[`paragraph-decoration--${decoration}`]]: decoration
    },
    className
  )

  return <p className={paragraphStyles}>{children}</p>
}

Paragraph.displayName = 'Paragraph'
