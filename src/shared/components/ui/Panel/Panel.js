import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Panel.scss'

const cssClass = styles(scss)

/**
 * Panel - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: 'panel'
 * @param {object} props.children - children
 * @param {string} props.variant - variant, default 'padding-default'
 * @param {bool} props.adjustHeight - adjust panel height to container height
 * @param {bool} props.isBackground - add background
 * @param {bool} props.hasShadow - panel shadow, default true
 * @return {object} An object of children element
 */
const panel = ({
  className,
  children,
  variant,
  adjustHeight,
  isBackground,
  hasShadow
}) => {
  const elementClasses = cssClass({
    'panel--padding-nolr': variant === 'padding-nolr',
    'panel--padding-default': variant === 'padding-default',
    'panel--padding-tiny': variant === 'padding-tiny',
    'panel--padding-none': variant === 'padding-none',
    'panel--padding-bottom-tiny': variant === 'padding-bottom-tiny',
    'panel--padding-input': variant === 'padding-input',
    'panel--adjust-height': adjustHeight === true,
    'panel--background': isBackground === true,
    'panel--shadow-none': hasShadow === false
  })

  return (
    <div className={cssClass(className, elementClasses)}>
        {children}
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
panel.displayName = 'Panel'

/**
 * The properties.
 * @type {Object}
 */
panel.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname, default `panel`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Variant
   */
  variant: PropTypes.oneOf([
    'padding-default',
    'padding-nolr',
    'padding-tiny',
    'padding-none',
    'padding-bottom-tiny',
    'padding-input',
    'padding-huge'
  ]),
  /**
   * Adjust panel height to container height
   */
  adjustHeight: PropTypes.bool,
  /**
   * isBackground add background
   */
  isBackground: PropTypes.bool,
  /**
   * hasShadow add shadows
   */
  hasShadow: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
panel.defaultProps = {
  className: 'panel',
  variant: 'padding-default',
  adjustHeight: false,
  isBackground: false,
  hasShadow: true
}

export default panel
