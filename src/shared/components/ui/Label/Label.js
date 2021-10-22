import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import scss from './Label.scss'

const cssClass = styles(scss)

/**
 * Label - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `label`
 * @param {string} props.id - input id
 * @param {bool} props.isToggle - is toggle label
 * @param {bool} props.toggle - toggle change
 * @return {object} An object of children element
 */
const label = memo(({ children, className, id, isToggle, toggle }) => (
  <label
    className={cssClass(
      className,
      isToggle
        ? toggle
          ? 'label--active'
          : 'label--inactive'
        : 'label--normal'
    )}
    id={id}
  >
    {children}
  </label>
))

/**
 * Display name
 * @type {string}
 */
label.displayName = 'Label'

/**
 * The properties.
 * @type {Object}
 */
label.propTypes = {
  /**
   * Children element
   */
  children: PropTypes.node.isRequired,
  /**
   * ClassName, default `label`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Id
   */
  id: PropTypes.string,
  /**
   * isToggle
   */
  isToggle: PropTypes.bool,
  /**
 * Toggle
 */
  toggle: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
label.defaultProps = {
  className: 'label',
  id: null,
  isToggle: false,
  toggle: false
}

export default label
