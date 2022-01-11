import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Label.module.scss'

/**
 * Label - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.id - input id
 * @param {bool} props.isToggle - is toggle label
 * @param {bool} props.toggle - toggle change
 * @return {object} An object of children element
 */
const Label = ({ children, id, isToggle, toggle }) => {
  const elementClasses = useStyles({
    [styles['label']]: true,
    [styles['label--normal']]: true,
    [styles['label--active']]: isToggle && toggle,
    [styles['label--inactive']]: isToggle && !toggle
  })

  return (
    <label className={elementClasses} id={id}>
      {children}
    </label>
  )
}

Label.displayName = 'Label'

Label.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  isToggle: PropTypes.bool,
  toggle: PropTypes.bool
}

Label.defaultProps = {
  id: null,
  isToggle: false,
  toggle: false
}

export default Label
