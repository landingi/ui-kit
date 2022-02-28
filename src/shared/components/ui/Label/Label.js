import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from 'shared/helpers/hooks/useStyles'
import styles from './Label.module.scss'

// TODO Label test
/**
 * Label - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `label`
 * @param {string} props.id - input id
 * @param {bool} props.isToggle - is toggle label
 * @param {bool} props.toggle - toggle change
 * @return {object} An object of children element
 */
const Label = ({ children, className, id, isToggle, toggle }) => {
  const labelStyles = useStyles(
    {
      [styles.label]: true,
      [styles['label--normal']]: !isToggle,
      [styles['label--active']]: isToggle && toggle,
      [styles['label--inactive']]: isToggle && !toggle
    },
    className
  )

  return (
    <label className={labelStyles} id={id}>
      {children}
    </label>
  )
}

Label.displayName = 'Label'

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  isToggle: PropTypes.bool,
  toggle: PropTypes.bool
}

Label.defaultProps = {
  className: '',
  id: null,
  isToggle: false,
  toggle: false
}

export default Label
