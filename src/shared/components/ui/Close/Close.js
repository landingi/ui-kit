import Button from '@components/ui/Button'
import Icon from '@components/ui/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Close.module.scss'

/**
 * Close - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */
const Close = ({ className, onClick }) => (
  <span className={className} onClick={onClick}>
    <Button variant='icon'>
      <Icon icon='icon-remove' />
    </Button>
  </span>
)

Close.displayName = 'Close'

Close.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func
}

Close.defaultProps = {
  className: styles['close'],
  onClick: () => null
}

export default Close
