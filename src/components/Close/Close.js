import Button from '@components/Button'
import Icon from '@components/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Close.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Close - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {function} props.onClick - click handler
 * @param {string} props.iconName
 * @param {string} props.iconColor
 * @return {object} An object of children element
 */
const Close = ({ className, onClick, iconName, iconColor }) => {
  const elementStyles = useStyles(
    {
      [styles['close']]: true
    },
    className
  )

  return (
    <span className={elementStyles} onClick={onClick}>
      <Button variant='icon' data-testid='close-component-button'>
        <Icon icon={iconName} color={iconColor} />
      </Button>
    </span>
  )
}

Close.displayName = 'Close'

Close.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func,
  iconName: PropTypes.string,
  iconColor: PropTypes.string
}

Close.defaultProps = {
  className: '',
  onClick: () => null,
  iconName: 'icon-remove'
}

export default Close
