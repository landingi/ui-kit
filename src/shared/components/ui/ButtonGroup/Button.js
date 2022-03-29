import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import { useButtonGroupContext } from './context'
import styles from './ButtonGroup.module.scss'

/**
 * Button - statefull presentational component
 * @param {node} props.children - children of the component
 * @param {string} props.id - id of the component
 * @return {object} An object of children element
 */
const Button = ({ children, id }) => {
  const { selected, setSelected } = useButtonGroupContext()

  const buttonStyles = useStyles({
    [styles.button]: true,
    [styles[`button--active`]]: selected === id
  })

  const handleChange = () => setSelected(id)

  return (
    <button className={buttonStyles} onClick={handleChange}>
      {children}
    </button>
  )
}

Button.displayName = 'ButtonGroupButton'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

export default Button
