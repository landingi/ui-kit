import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Panel.module.scss'

/**
 * Panel - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - children
 * @param {string} props.variant - variant
 * @param {bool} props.adjustHeight - adjust panel height to container height
 * @param {bool} props.isBackground - add background
 * @param {bool} props.hasShadow - panel shadow, default true
 * @return {object} An object of children element
 */
const Panel = ({
  className,
  children,
  variant,
  adjustHeight,
  isBackground,
  hasShadow,
  borderRadius,
  customBoxShadow
}) => {
  const elementClasses = useStyles(
    {
      [styles.panel]: true,
      [styles['panel--adjust-height']]: adjustHeight,
      [styles['panel--background']]: isBackground,
      [styles['panel--background']]: !hasShadow,
      [styles[`panel--${variant}`]]: variant
    },
    className
  )

  return (
    <div
      className={elementClasses}
      style={{ boxShadow: customBoxShadow, borderRadius }}
    >
      {children}
    </div>
  )
}

Panel.displayName = 'Panel'

Panel.propTypes = {
  adjustHeight: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  hasShadow: PropTypes.bool,
  isBackground: PropTypes.bool,
  variant: PropTypes.oneOf([
    'padding-default',
    'padding-nolr',
    'padding-tiny',
    'padding-none',
    'padding-bottom-tiny',
    'padding-input',
    'padding-huge'
  ]),
  borderRadius: PropTypes.string,
  customBoxShadow: PropTypes.string
}

Panel.defaultProps = {
  adjustHeight: false,
  className: '',
  hasShadow: true,
  isBackground: false,
  variant: 'padding-default',
  borderRadius: null,
  customBoxShadow: null
}

export default Panel
