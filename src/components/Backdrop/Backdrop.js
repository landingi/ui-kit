import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Backdrop.module.scss'

/**
 * Backdrop - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {function} props.onClick - click handler
 * @param {number} props.zIndex
 * @return {object} An object of children element
 */
const Backdrop = ({ className, onClick, zIndex }) => {
  const backdropStyles = useStyles(
    {
      [styles.backdrop]: true,
      [styles['backdrop__index-4']]: String(zIndex) === '4',
      [styles['backdrop__index-6']]: String(zIndex) === '6',
      [styles['backdrop__index-8']]: String(zIndex) === '8'
    },
    className
  )

  return (
    <div className={backdropStyles} onClick={onClick} data-testid='backdrop' />
  )
}

Backdrop.displayName = 'Backdrop'

Backdrop.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func,
  zIndex: PropTypes.oneOf(['4', '6', '8'])
}

Backdrop.defaultProps = {
  onClick: () => null,
  className: '',
  zIndex: null
}

export default Backdrop
