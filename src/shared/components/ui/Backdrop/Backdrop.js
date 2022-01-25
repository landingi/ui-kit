import React from 'react'
import { useStyles } from 'shared/helpers/hooks/useStyles'
import styles from './Backdrop.module.scss'

/**
 * Backdrop - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */
const Backdrop = ({ className, onClick }) => {
  const backdropStyles = useStyles(
    {
      [styles.backdrop]: true
    },
    className
  )

  return <div className={backdropStyles} onClick={onClick} />
}

Backdrop.displayName = 'Backdrop'

Backdrop.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func
}

Backdrop.defaultProps = {
  onClick: () => null,
  className: ''
}

export default Backdrop
