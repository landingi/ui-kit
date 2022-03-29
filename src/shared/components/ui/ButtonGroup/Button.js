import PropTypes from 'prop-types'
import { useStyles } from '@hooks/useStyles'
import { useButtonGroupContext } from './context'
import styles from './ButtonGroup.module.scss'

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
