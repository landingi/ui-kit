import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from 'shared/helpers/hooks/useStyles'
import styles from './Backdrop.module.scss'

/**
 * Backdrop - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */
const Backdrop = ({ className, onClick, zIndex }) => {
  const backdropStyles = useStyles(
    {
      [styles.backdrop]: true,
      [styles['backdrop__index-4']]: String(zIndex) === '4',
      [styles['backdrop__index-6']]: String(zIndex) === '6'
    },
    className
  )

  return <div className={backdropStyles} onClick={onClick} />
}

Backdrop.displayName = 'Backdrop'

Backdrop.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func,
  zIndex: PropTypes.oneOf(['4', '6'])
}

Backdrop.defaultProps = {
  onClick: () => null,
  className: '',
  zIndex: null
}

export default Backdrop
