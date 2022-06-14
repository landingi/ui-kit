import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Spacer.module.scss'

/**
 * Spacer - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {string} props.space - space size
 * @return {object} An object of children element
 */
const Spacer = ({ className, space }) => {
  const spacerClasses = useStyles(
    {
      [styles['spacer']]: true,
      [styles[`spacer--${space}`]]: space
    },
    className
  )

  return <div data-testid='spacer' className={spacerClasses} />
}

Spacer.displayName = 'Spacer'

Spacer.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  space: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'medium',
    'regular',
    'large',
    'big',
    'huge'
  ])
}

Spacer.defaultProps = {
  className: '',
  space: 'medium'
}

export default Spacer
