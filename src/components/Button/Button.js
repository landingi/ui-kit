import React, { Fragment } from 'react'
import Ink from 'react-ink'
import PropTypes from 'prop-types'
import Spinner from '@components/Spinner'
import styles from './Button.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

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
 * @param {buttonStyle} props.buttonStyle - enable button style for links, default: 'false'
 * @param {string} props.dataTestid - test id
 * @return {object} An object of children elements
 */
const Button = ({
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
  fitWidth,
  ['data-testid']: dataTestId
}) => {
  const elementClassesButton = useStyles(
    {
      [styles.button]: true,
      [styles[`button--${variant}`]]: variant,
      [styles[`button--${variant}--loading`]]: variant && isLoading,
      [styles[`button--${size}`]]: size,
      [styles[`button--${align}`]]: align,
      [styles['button--svg']]: hasIcon === true,
      [styles['button--hide']]: hide === true,
      [styles['button--fit-width']]: fitWidth === true,
      [styles.link]: !buttonStyle && Tag === 'a'
    },
    className
  )

  return (
    <Tag
      type={Tag === 'button' ? type : undefined}
      disabled={isDisabled ? 'disabled' : undefined}
      href={Tag === 'a' ? href : undefined}
      title={Tag === 'a' ? title : undefined}
      target={Tag === 'a' ? target : undefined}
      className={elementClassesButton}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {isLoading && <Spinner />}

      {!isLoading && <Fragment>{children}</Fragment>}

      {hasBackgoundRipple && <Ink />}
    </Tag>
  )
}

Button.displayName = 'Button'

Button.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'input']),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'secondary-outlined',
    'dropdown',
    'transparent',
    'icon',
    'icon-transparent',
    'icon-transparent-hover',
    'alert',
    'clean',
    'tabs',
    'transparent-blue',
    'dropdown-element',
    'action',
    'white',
    'black',
    'publish',
    'switcher-brand'
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  hasBackgoundRipple: PropTypes.bool,
  hasIcon: PropTypes.bool,
  hide: PropTypes.bool,
  buttonStyle: PropTypes.bool,
  fitWidth: PropTypes.bool,
  ['data-testid']: PropTypes.string
}

Button.defaultProps = {
  tag: 'button',
  title: undefined,
  type: 'button',
  href: undefined,
  target: undefined,
  className: '',
  size: 'medium',
  align: null,
  variant: 'primary',
  isLoading: false,
  isDisabled: false,
  hasBackgoundRipple: true,
  hasIcon: false,
  hide: false,
  buttonStyle: false,
  fitWidth: false,
  onClick: () => {},
  ['data-testid']: undefined
}

export default Button
