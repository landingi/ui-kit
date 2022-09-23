import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import { useButtonGroupContext } from './context'
import styles from './ButtonGroup.module.scss'

/**
 * Button - statefull presentational component
 * @param {node} props.children - children of the component
 * @param {string} props.id - id of the component
 * @param {bool} props.isDisabled - disabled status, default: false
 * @return {object} An object of children element
 */
const Button = ({ children, id, isDisabled }) => {
  const { selected, setSelected } = useButtonGroupContext()

  const buttonStyles = useStyles({
    [styles.button]: true,
    [styles[`button--active`]]: selected === id,
    [styles[`button--disabled`]]: isDisabled
  })

  const handleChange = () => setSelected(id)

  return (
    <button
      className={buttonStyles}
      onClick={handleChange}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

Button.displayName = 'ButtonGroupButton'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool
}

Button.defaultProps = {
  isDisabled: false
}

export default Button
