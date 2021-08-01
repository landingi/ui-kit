import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Divider.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Divider - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - a list of class names, default: `divider`
 * @param {string} props.variant - variant `normal, menu, dropdown, horizontal`
 * @param {string} props.align - align `vertical`
 * @return {object} An object of children element
 */
const divider = ({ className, variant, align }) => {
  const elementClasses = cssClass({
    'divider--normal': variant === 'normal',
    'divider--menu': variant === 'menu',
    'divider--dropdown': variant === 'dropdown',
    'divider--horizontal': variant === 'horizontal',
    'divider--vertical': align === 'vertical'
  })

  return (
    <div
      className={cssClass(
        'divider',
        className,
        elementClasses
      )}
    />
  )
}

/**
 * Display name
 * @type {string}
 */
divider.displayName = 'Divider'

/**
 * The properties.
 * @type {Object}
 */
divider.propTypes = {
  /**
   * Classname, default `divider`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Variant
   */
  variant: PropTypes.string,
  /**
   * Align
   */
  align: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
divider.defaultProps = {
  className: 'divider',
  variant: 'normal',
  align: ''
}

export default divider
