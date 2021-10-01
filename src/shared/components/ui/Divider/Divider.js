import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Divider.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * Divider - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - a list of class names, default: `divider`
   * @param {string} props.variant - variant `normal, menu, dropdown, horizontal`
   * @param {string} props.align - align `vertical`
   * @return {object} An object of children element
   */
  divider = ({ className, variant, align }) => {
    const elementClasses = cssClass({
      'divider--dropdown': variant === 'dropdown',
      'divider--horizontal': variant === 'horizontal',
      'divider--menu': variant === 'menu',
      'divider--normal': variant === 'normal',
      'divider--vertical': align === 'vertical'
    })

    return <div className={cssClass('divider', className, elementClasses)} />
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
   * Align
   */
  align: PropTypes.string,

  /**
   * Classname, default `divider`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   * Variant
   */
  variant: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
divider.defaultProps = {
  align: '',
  className: 'divider',
  variant: 'normal'
}

export default divider
