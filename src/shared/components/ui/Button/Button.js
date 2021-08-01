/* eslint-disable react/jsx-no-useless-fragment */
import React, { Fragment } from 'react'
/**
 * Add the Material Design ripple effect to React component
 * @see {@link https://github.com/vigetlabs/react-ink} for further information.
 */
import Ink from 'react-ink'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import Spinner from '@components/ui/Spinner'
import scss from './Button.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Button - stateless presentational component
 * @param {object} props - props
 * @param {string} props.tag - Tag: button or a
 * @param {string} props.title - link title
 * @param {string} props.target - Target: _self, _blank, _parent, _top
 * @param {string} props.type - Type: button, reset, submit
 * @param {string} props.href - Link
 * @param {string} props.size - Size `tiny, medium, large`
 * @param {string} props.variant - Variant, default: 'primary'
 * @param {string} props.align - Align `left, center, right`
 * @param {string|array} props.className - a custom list of class names, default: `button`
 * @param {object} props.children - children
 * @param {bool} props.isLoading - loader status, default: false
 * @param {bool} props.isDisabled - disabled status, default: false
 * @param {function} props.onClick - click handler
 * @param {bool} props.hasBackgoundRipple - background ripple effect, default: true
 * @param {bool} props.hasIcon - has icon, default: false
 * @param {bool} props.hide - Hide, default: false
 * @param {buttonStyle} props.buttonStyle - enable button style for links, default: 'false',
 * @param {string} props.id - element id
 * @return {object} An object of children elements
 */
const button = ({
  className,
  tag: Tag,
  title,
  type,
  href,
  size,
  variant,
  align,
  target,
  children,
  onClick,
  isLoading,
  isDisabled,
  hasBackgoundRipple,
  hasIcon,
  hide,
  buttonStyle,
  id,
  fitWidth
}) => {
  const elementClasses = cssClass({
    'button--primary': variant === 'primary',
    'button--secondary': variant === 'secondary',
    'button--dropdown': variant === 'dropdown',
    'button--transparent': variant === 'transparent',
    'button--transparent-blue':
      variant === 'transparent-blue',
    'button--dropdown-element':
      variant === 'dropdown-element',
    'dropdown button--switcher': variant === 'switcher',
    'button--switcher-brand': variant === 'switcher-brand',
    'button--tabs': variant === 'tabs',
    'button--alert': variant === 'alert',
    'button--icon': variant === 'icon',
    'button--action': variant === 'action',
    'button--tiny': size === 'tiny',
    'button--small': size === 'small',
    'button--medium': size === 'medium',
    'button--large': size === 'large',
    'button--input': size === 'input',
    'button--center': align === 'center',
    'button--left': align === 'left',
    'button--right': align === 'right',
    'button--svg': hasIcon === true,
    'button--hide': hide === true,
    'button--fit-width': fitWidth === true
  })

  return (
    <Tag
      className={
        Tag === 'button'
          ? cssClass('button', elementClasses, className)
          : cssClass(
              buttonStyle
                ? ['button', elementClasses]
                : 'link',
              className
            )
      }
      disabled={isDisabled ? 'disabled' : undefined}
      href={Tag === 'a' ? href : undefined}
      onClick={onClick}
      target={Tag === 'a' ? target : undefined}
      title={Tag === 'a' ? title : undefined}
      type={Tag === 'button' ? type : undefined}
    >
      {isLoading && <Spinner />}

      {!isLoading && <>{children}</>}

      {hasBackgoundRipple && <Ink />}
    </Tag>
  )
}

/**
 * Display name
 * @type {string}
 */
button.displayName = 'Button'

/**
 * The properties.
 * @type {Object}
 */
button.propTypes = {
  /**
   * The tag or component to be used e.g. button, a, Link
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  /**
   * The text for the button
   */
  children: PropTypes.node.isRequired,
  /**
   * The type of the button
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * Link title
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /**
   * The target for the button
   */
  target: PropTypes.oneOf([
    '_self',
    '_blank',
    '_parent',
    '_top'
  ]),
  /**
   * Size
   */
  size: PropTypes.oneOf([
    'tiny',
    'small',
    'medium',
    'large',
    'input'
  ]),
  /**
   * Variant
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'dropdown',
    'transparent',
    'icon',
    'alert',
    'clean',
    'tabs',
    'transparent-blue',
    'dropdown-element',
    'switcher-brand',
    'switcher'
  ]),
  /**
   * Align
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * Classname, default `button`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Link
   */
  href: PropTypes.string,
  /**
   * Disabled button
   */
  isDisabled: PropTypes.bool,
  /**
   * Loading button
   */
  isLoading: PropTypes.bool,
  /**
   * Gets called when the user clicks on the button
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props of this Button
   */
  onClick: PropTypes.func,
  /**
   * Has background ripple effect
   */
  hasBackgoundRipple: PropTypes.bool,
  /**
   * Has icon
   */
  hasIcon: PropTypes.bool,
  /**
   * Hide
   */
  hide: PropTypes.bool,
  /**
   * Enable button variants style for links
   */
  buttonStyle: PropTypes.bool,
  /**
   * Element id
   */
  id: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
button.defaultProps = {
  tag: 'button',
  title: undefined,
  type: 'button',
  href: undefined,
  target: undefined,
  className: 'button',
  size: 'medium',
  align: null,
  variant: 'primary',
  isLoading: false,
  isDisabled: false,
  onClick: () => {},
  hasBackgoundRipple: true,
  hasIcon: false,
  hide: false,
  buttonStyle: false,
  fitWidth: false,
  id: null
}

export default button
