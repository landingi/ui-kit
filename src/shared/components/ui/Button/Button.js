/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react'
/**
 * Add the Material Design ripple effect to React component
 * @see {@link https://github.com/vigetlabs/react-ink} for further information.
 */
import { styles } from '@helpers/css'
import Ink from 'react-ink'
import PropTypes from 'prop-types'
import Spinner from '@components/ui/Spinner'
import scss from './Button.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
function Button({
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
}) {
  const elementClasses = cssClass({
    'button--action': variant === 'action',
    'button--alert': variant === 'alert',
    'button--center': align === 'center',
    'button--dropdown': variant === 'dropdown',
    'button--dropdown-element':
      variant === 'dropdown-element',
    'button--fit-width': fitWidth === true,
    'button--hide': hide === true,
    'button--icon': variant === 'icon',
    'button--input': size === 'input',
    'button--large': size === 'large',
    'button--left': align === 'left',
    'button--medium': size === 'medium',
    'button--primary': variant === 'primary',
    'button--right': align === 'right',
    'button--secondary': variant === 'secondary',
    'button--small': size === 'small',
    'button--svg': hasIcon === true,
    'button--switcher-brand': variant === 'switcher-brand',
    'button--tabs': variant === 'tabs',
    'button--tiny': size === 'tiny',
    'button--transparent': variant === 'transparent',
    'button--transparent-blue':
      variant === 'transparent-blue',
    'dropdown button--switcher': variant === 'switcher'
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
Button.displayName = 'Button'

/**
 * The properties.
 * @type {Object}
 */
Button.propTypes = {
  /**
   * Align
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * Enable button variants style for links
   */
  buttonStyle: PropTypes.bool,

  /**
   * The text for the button
   */
  children: PropTypes.node.isRequired,

  /**
   * Classname, default `button`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),

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
   * Link
   */
  href: PropTypes.string,

  /**
   * Element id
   */
  id: PropTypes.string,

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
   * The tag or component to be used e.g. button, a, Link
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
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
   * Link title
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * The type of the button
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

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
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
Button.defaultProps = {
  align: null,
  buttonStyle: false,
  className: 'button',
  fitWidth: false,
  hasBackgoundRipple: true,
  hasIcon: false,
  hide: false,
  href: undefined,
  id: null,
  isDisabled: false,
  isLoading: false,
  onClick: () => {},
  size: 'medium',
  tag: 'button',
  target: undefined,
  title: undefined,
  type: 'button',
  variant: 'primary'
}

export default Button
