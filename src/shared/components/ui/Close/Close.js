import Button from '@components/ui/Button'
import Icon from '@components/ui/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Close.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Close - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {function} props.onClick - click handler
 * @param {string} props.color
 * @return {object} An object of children element
 */
const Close = ({ className, onClick, color }) => {
  const elementStyles = useStyles(
    {
      [styles['color']]: true,
      [styles[`icon--${color}`]]: color
    },
    className
  )

  return (
    <span className={elementStyles} onClick={onClick}>
      <Button variant='icon'>
        <Icon icon='icon-remove' />
      </Button>
    </span>
  )
}

Close.displayName = 'Close'

Close.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func,
  color: PropTypes.string
}

Close.defaultProps = {
  className: '',
  onClick: () => null
}

export default Close
