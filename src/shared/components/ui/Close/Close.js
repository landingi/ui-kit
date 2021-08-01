import React from 'react'
import PropTypes from 'prop-types'
import Button from '@components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from 'shared/helpers/css'
import scss from './Close.scss'

const cssClass = styles(scss)

/**
 * Close - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: close
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */
const close = ({ className, onClick }) => (
  <span className={cssClass(className)}
onClick={onClick}>
    <Button variant="icon">
      <FontAwesomeIcon icon="times"
size="sm" />
    </Button>
  </span>
)

/**
 * Display name
 * @type {string}
 */
close.displayName = 'Close'

/**
 * The properties.
 * @type {Object}
 */
close.propTypes = {
  /**
   * Classname, default `close`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Gets called when the user clicks on close
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
close.defaultProps = {
  className: 'close',
  onClick: () => null
}

export default close
