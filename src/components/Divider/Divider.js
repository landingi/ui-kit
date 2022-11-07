import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Divider.module.scss'

/**
 * Divider - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {string} props.variant - variant `normal, menu, dropdown, horizontal`
 * @param {string} props.align - align `vertical`
 * @return {object} An object of children element
 */
const Divider = ({ className, variant, align }) => {
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

Divider.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  align: PropTypes.string,
  variant: PropTypes.oneOf(['dropdown', 'horizontal', 'menu', 'normal'])
}

Divider.defaultProps = {
  className: '',
  align: '',
  variant: 'normal'
}

export default Divider
