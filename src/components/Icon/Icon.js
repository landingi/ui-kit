import React from 'react'
import PropTypes from 'prop-types'
import styles from './Icon.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'
import css from './editor-icons.module.scss'

/**
 * Icon - stateless presentational component
 * @param {object} props - props
 * @param {string} props.icon - icon name
 * @param {string} props.color - color of icon default, primary
 * @param {number} props.size - size of icon default, 14px
 * @param {bool} props.autoSize - the size of the wrapper font
 * @param {string | array} props.className - list of classes out of module
 * @return {object} An object of children element
 */
const Icon = ({
  icon,
  color,
  className,
  spin,
  size,
  autoSize,
  ['data-testid']: dataTestId
}) => {
  const elementStyles = useStyles(
    {
      [css['editor-icon']]: true,
      [css[`editor-icon--${size}`]]: !autoSize && size,
      [css[`${icon}`]]: true,
      [styles[`icon--${color}`]]: color,
      [styles['icon--spin']]: spin
    },
    className
  )

  return <i className={elementStyles} data-testid={dataTestId} />
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  spin: PropTypes.bool,
  size: PropTypes.oneOf([10, 12, 14]),
  autoSize: PropTypes.bool,
  ['data-testid']: PropTypes.string
}

Icon.defaultProps = {
  className: '',
  color: 'default',
  spin: false,
  size: 14,
  autoSize: false,
  ['data-testid']: undefined
}

export default Icon
