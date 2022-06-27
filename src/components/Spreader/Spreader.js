import PropTypes from 'prop-types'
import React from 'react'
import styles from './Spreader.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Spreader - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `spreader`
 * @param {string} props.spread - spread size
 * @return {object} An object of children element
 */
const Spreader = ({ className, spread }) => {
  const spreaderClasses = useStyles(
    {
      [styles['spreader']]: true,
      [styles[`spreader--${spread}`]]: spread
    },
    className
  )

  return <div data-testid='spreader' className={spreaderClasses} />
}

Spreader.displayName = 'Spreader'

Spreader.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  spread: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'x-large',
    'big',
    'huge'
  ])
}

Spreader.defaultProps = {
  className: 'spreader',
  spread: 'medium'
}

export default Spreader
