import React from 'react'
import PropTypes from 'prop-types'
import Spreader from '@components/ui/Spreader'
import Icon from '@components/ui/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Check.module.scss'

/**
 * Check - stateless presentational component
 * @param {object} props - props
 * @param {bool} positive - positive
 * @param {object} children - children
 * @param {string} iconWidth - iconWidth
 * @param {bool} crossedOutOnPositive - defines whether text crossing out animation will be player or not when positive prop changes to true
 * @return {object} An object of children element
 */
const Check = ({ children, positive, iconWidth, crossedOutOnPositive }) => {
  const wrapperStyles = useStyles({
    [styles.check]: true,
    [styles['check--positive']]: positive,
    [styles['check--crossed-out']]: positive && crossedOutOnPositive
  })

  return (
    <span className={wrapperStyles}>
      <Icon icon={positive ? 'check' : 'times'} style={{ width: iconWidth }} />

      <Spreader spread='tiny' />
      <div className={styles['check__line-through']}>{children}</div>
    </span>
  )
}

Check.displayName = 'Check'

Check.propTypes = {
  children: PropTypes.node.isRequired,
  positive: PropTypes.bool,
  iconWidth: PropTypes.string,
  crossedOutOnPositive: PropTypes.bool
}

Check.defaultProps = {
  positive: false,
  iconWidth: '1em',
  crossedOutOnPositive: false
}

export default Check
