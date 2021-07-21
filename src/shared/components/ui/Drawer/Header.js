import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Drawer.scss'
import Heading from 'shared/components/ui/Heading'
import Close from 'shared/components/ui/Close'

const cssClass = styles(scss)

/**
 * Drawer header - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: drawer__header
 * @param {string} props.title - title
 * @param {function} props.onClick - click handler
 * @param {Boolean} props.hasClose - show close icon, default: true
 * @return {object} An object of children element
 */
const header = ({
  className,
  title,
  onClick,
  hasClose
}) => (
  <div className={cssClass(className)} >
    <Heading level={2}>
      {title}
    </Heading>

    {hasClose && (
      <Close onClick={onClick} />
    )}
  </div>
)

/**
 * Display name
 * @type {string}
 */
header.displayName = 'Drawer.Header'

/**
 * The properties.
 * @type {Object}
 */
header.propTypes = {
  /**
   * Title
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  /**
   * Classname, default `drawer__header`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Gets called when the user clicks on the account
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func,
  /**
   * Show close icon
   *
   * @param {Boolean}
   */
  hasClose: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
header.defaultProps = {
  className: 'drawer__header',
  onClick: () => null,
  hasClose: true
}

export default header
