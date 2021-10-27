import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './CustomLink.scss'

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
const CustomLink = ({
  className,
  variant,
  label,
  href,
  target,
  size,
  underlined,
  onClick
}) => (
  <a
    className={cssClass(
      className,
      `custom-link--${variant}`,
      `custom-link--${size}`,
      underlined && 'custom-link--underlined'
    )}
    href={href}
    onClick={onClick}
    target={target}
  >
    {label}
  </a>
)

CustomLink.displayName = 'CustomLink'

CustomLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  size: PropTypes.oneOf([10, 12, 14, 16]),
  target: PropTypes.string,
  variant: PropTypes.oneOf(['active', 'inactive', 'dark']),
  onClick: PropTypes.func
}

CustomLink.defaultProps = {
  className: 'custom-link',
  size: 14,
  target: '_self',
  variant: 'active',
  underlined: false,
  href: null,
  onClick: () => null
}

export default CustomLink
