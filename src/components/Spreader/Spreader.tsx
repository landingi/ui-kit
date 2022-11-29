import { useStyles } from '@helpers/hooks/useStyles'
import React, { FC } from 'react'

import styles from './Spreader.module.scss'

interface SpreaderProps {
  className?: string | string[]
  spread?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large'
    | 'big'
    | 'huge'
}

/**
 * Spreader - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `spreader`
 * @param {string} props.spread - spread size
 * @return {object} An object of children element
 */
const Spreader: FC<SpreaderProps> = ({ className, spread = 'medium' }) => {
  const spreaderClasses = useStyles(
    {
      [styles.spreader]: true,
      [styles[`spreader--${spread}`]]: spread
    },
    className
  )

  return <div data-testid='spreader' className={spreaderClasses} />
}

Spreader.displayName = 'Spreader'

export default Spreader
