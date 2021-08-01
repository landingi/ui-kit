import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './CustomLink.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Custom Link - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `custom-link`
 * @param {string} props.variant - variant of color:  active, inactive, dark
 * @param {string} props.size - variant of font-size: 14, 16; default: 14
 * @param {string} props.target - target
 * @param {string} props.href - href
 * @param {string} props.label - label to display
 */
const customLink = ({
  className,
  variant,
  label,
  href,
  target,
  size
}) => (
  <a
    className={cssClass(
      className,
      `custom-link--${variant}`,
      `custom-link--${size}`
    )}
    href={href}
    target={target}
  >
    {label}
  </a>
)

/**
 * Display name
 * @type {string}
 */
customLink.displayName = 'Custom link'

/**
 * The properties.
 * @type {Object}
 */
customLink.propTypes = {
  /**
   * Classname, default `custom-link`
   */
  className: PropTypes.string,
  /**
   * Variant, default 'active'
   */
  variant: PropTypes.oneOf(['active', 'inactive', 'dark']),
  /**
   * Label
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  /**
   * Link
   */
  href: PropTypes.string.isRequired,
  /**
   * target
   */
  target: PropTypes.string,
  /**
   * font size
   */
  size: PropTypes.number
}

/**
 * The default properties.
 * @type {Object}
 */
customLink.defaultProps = {
  className: 'custom-link',
  variant: 'active',
  target: '_self',
  size: 14
}

export default customLink
