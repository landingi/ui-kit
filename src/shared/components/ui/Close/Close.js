import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import Button from '@components/ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Close.scss'

const cssClass = styles(scss)

/**
 * Close - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: close
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */
const Close = ({ className, onClick }) => (
  <span className={cssClass(className)} onClick={onClick}>
    <Button variant='icon'>
      <FontAwesomeIcon icon='times' size='sm' />
    </Button>
  </span>
)

Close.displayName = 'Close'

Close.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func
}

close.defaultProps = {
  className: 'close',
  onClick: () => null
}

export default close
