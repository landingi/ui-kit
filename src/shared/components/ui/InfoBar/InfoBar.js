import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import scss from './InfoBar.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Info Bar - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `info-bar`
 * @param {string} props.type - type of info bar `info, success, warning, alert`
 * @return {object} An object of children element
 */
const infoBar = ({ children, className, type }) => {
  const icon =
    type === 'warning'
      ? 'exclamation'
      : type === 'alert'
        ? 'exclamation-triangle'
        : 'info'

  return (
    <div className={cssClass(className, `info-bar--${type}`)}>
      <div
        className={cssClass(
          className,
          'info-bar--box',
          `info-bar--${type}-box`
        )}
      >
        <FontAwesomeIcon
icon={icon}
size="1x" />
      </div>

      <div className={scss.info__bar}>{children}</div>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
infoBar.displayName = 'Info Bar'

/**
 * The properties.
 * @type {Object}
 */
infoBar.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  /**
   * Classname, default `info-bar`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * type of notification `info, success, warning, alert`
   */
  type: PropTypes.oneOf(['warning', 'info', 'alert'])
}

/**
 * The default properties.
 * @type {Object}
 */
infoBar.defaultProps = {
  className: 'info-bar',
  type: 'info'
}

export default infoBar
