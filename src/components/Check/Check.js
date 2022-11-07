import React from 'react'
import PropTypes from 'prop-types'
import Spreader from '@components/Spreader'
import Icon from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Check.module.scss'

/**
 * Check - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {bool} positive - positive
 * @param {object} children - children
 * @param {string} iconWidth - iconWidth
 * @param {bool} crossedOutOnPositive - defines whether text crossing out animation will be player or not when positive prop changes to true
 * @return {object} An object of children element
 */
const Check = ({
  className,
  children,
  positive,
  iconWidth,
  crossedOutOnPositive
}) => {
  const wrapperStyles = useStyles(
    {
      [styles.check]: true,
      [styles['check--positive']]: positive,
      [styles['check--crossed-out']]: positive && crossedOutOnPositive
    },
    className
  )

  return (
    <span className={wrapperStyles} data-testid='check'>
      <Icon
        icon={positive ? 'icon-ok' : 'icon-remove'}
        style={{ width: iconWidth }}
      />

      <Spreader spread='tiny' />
      <div className={styles['check__line-through']}>{children}</div>
    </span>
  )
}

Check.displayName = 'Check'

Check.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node.isRequired,
  positive: PropTypes.bool,
  iconWidth: PropTypes.string,
  crossedOutOnPositive: PropTypes.bool
}

Check.defaultProps = {
  className: '',
  positive: false,
  iconWidth: '1em',
  crossedOutOnPositive: false
}

export default Check
