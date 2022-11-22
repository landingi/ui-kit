import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Divider.module.scss'

interface DividerProps {
  className?: string | string[]
  variant?: 'dropdown' | 'horizontal' | 'menu' | 'normal'
  align?: string
}

/**
 * Divider - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {string} props.variant - variant `normal, menu, dropdown, horizontal`
 * @param {string} props.align - align `vertical`
 * @return {object} An object of children element
 */
const Divider: FC<DividerProps> = ({
  className = '',
  variant = 'normal',
  align = ''
}) => {
  const elementClasses = useStyles(
    {
      [styles.divider]: true,
      [styles['divider--dropdown']]: variant === 'dropdown',
      [styles['divider--horizontal']]: variant === 'horizontal',
      [styles['divider--menu']]: variant === 'menu',
      [styles['divider--normal']]: variant === 'normal',
      [styles['divider--vertical']]: align === 'vertical'
    },
    className
  )

  return <div className={elementClasses} data-testid='divider' />
}

Divider.displayName = 'Divider'

export default Divider
