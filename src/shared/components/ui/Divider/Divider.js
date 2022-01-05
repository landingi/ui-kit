import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Divider.module.scss'

/**
 * Divider - stateless presentational component
 * @param {object} props - props
 * @param {string} props.variant - variant `normal, menu, dropdown, horizontal`
 * @param {string} props.align - align `vertical`
 * @return {object} An object of children element
 */
const Divider = ({ variant, align }) => {
  const elementClasses = useStyles({
    [styles['divider']]: true,
    [styles['divider--dropdown']]: variant === 'dropdown',
    [styles['divider--horizontal']]: variant === 'horizontal',
    [styles['divider--menu']]: variant === 'menu',
    [styles['divider--normal']]: variant === 'normal',
    [styles['divider--vertical']]: align === 'vertical'
  })

  return <div className={elementClasses} />
}

Divider.displayName = 'Divider'

Divider.propTypes = {
  align: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  variant: PropTypes.oneOf(['dropdown', 'horizontal', 'menu', 'normal'])
}

Divider.defaultProps = {
  className: styles.divider,
  align: '',
  variant: 'normal'
}

export default Divider
