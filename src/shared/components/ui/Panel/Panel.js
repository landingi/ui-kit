import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Panel.scss'

const cssClass = styles(scss),
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
  panel = ({
    className,
    children,
    variant,
    adjustHeight,
    isBackground,
    hasShadow
  }) => {
    const elementClasses = cssClass({
      'panel--adjust-height': adjustHeight === true,
      'panel--background': isBackground === true,
      'panel--padding-bottom-tiny': variant === 'padding-bottom-tiny',
      'panel--padding-default': variant === 'padding-default',
      'panel--padding-input': variant === 'padding-input',
      'panel--padding-nolr': variant === 'padding-nolr',
      'panel--padding-none': variant === 'padding-none',
      'panel--padding-tiny': variant === 'padding-tiny',
      'panel--shadow-none': hasShadow === false
    })

    return <div className={cssClass(className, elementClasses)}>{children}</div>
  }


panel.displayName = 'Panel'


panel.propTypes = {
  /**
   * Adjust panel height to container height
   */
  adjustHeight: PropTypes.bool,

  /**
   * Children elements
   */
  children: PropTypes.node.isRequired,

  /**
   * Classname, default `panel`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   * HasShadow add shadows
   */
  hasShadow: PropTypes.bool,

  /**
   * IsBackground add background
   */
  isBackground: PropTypes.bool,

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
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
panel.defaultProps = {
  adjustHeight: false,
  className: 'panel',
  hasShadow: true,
  isBackground: false,
  variant: 'padding-default'
}

export default panel
