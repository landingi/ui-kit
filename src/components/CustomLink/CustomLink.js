import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './CustomLink.module.scss'

/**
 * Custom Link - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {string} props.variant - variant of color:  active, inactive, dark
 * @param {string} props.size - variant of font-size: 14, 16; default: 14
 * @param {string} props.target - target
 * @param {string} props.href - href
 * @param {string} props.label - label to display
 * @param {boolean} props.underlined - add underlined to link
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
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
}) => {
  const customLinkStyles = useStyles(
    {
      [styles['custom-link']]: true,
      [styles[`custom-link--${variant}`]]: variant,
      [styles[`custom-link--${size}`]]: size,
      [styles['custom-link--underlined']]: underlined
    },
    className
  )

  return (
    <a
      data-testid='custom-link'
      className={customLinkStyles}
      href={href}
      onClick={onClick}
      target={target}
    >
      {label}
    </a>
  )
}

CustomLink.displayName = 'CustomLink'

CustomLink.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  href: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  size: PropTypes.oneOf([10, 12, 14, 16]),
  target: PropTypes.string,
  variant: PropTypes.oneOf(['active', 'inactive', 'dark']),
  onClick: PropTypes.func,
  underlined: PropTypes.bool
}

CustomLink.defaultProps = {
  className: '',
  size: 14,
  target: '_self',
  variant: 'active',
  underlined: false,
  href: null,
  onClick: () => null
}

export default CustomLink
