import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Indicator.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * Indicator - stateless presentational component
   * @param {object} props - props
   * @param {object} props.children - children
   * @param {string|array} props.content - content
   * @param {boolean} props.isAlert - is alert
   * @param {string|array} props.className - list of class names, default: `indicator`
   * @param {function} props.onClick - click handler
   * @return {object} An object of children element
   */
  indicator = ({
    children,
    className,
    content,
    isAlert,
    onClick
  }) => {
    const hasAlertClass = isAlert ? 'is--alert' : undefined
    return (
      <span
        className={cssClass(className, hasAlertClass)}
        onClick={onClick}
      >
        <i>{content}</i>

        {children}
      </span>
    )
  }

/**
 * Display name
 * @type {string}
 */
indicator.displayName = 'Indicator'

/**
 * The properties.
 * @type {Object}
 */
indicator.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node.isRequired,
  /**
   * Content
   */
  content: PropTypes.string,
  /**
   * Classname, default `indicator`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Alert
   */
  isAlert: PropTypes.bool,
  /**
   * Gets called when the user clicks on the button
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props of this Button
   */
  onClick: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
indicator.defaultProps = {
  className: 'indicator',
  content: null,
  isAlert: false,
  onClick: () => {}
}

export default indicator
