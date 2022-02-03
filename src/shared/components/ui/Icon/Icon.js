import React from 'react'
import PropTypes from 'prop-types'
import styles from './Icon.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'
import css from './fonts/css/editor-icons.module.scss'

//TODO Icon mdx
/**
 * Icon - stateless presentational component
 * @param {object} props - props
 * @param {string} props.icon - icon name
 * @param {string} props.color - color of icon default, primary
 * @param {string | array} props.className - list of classes out of module
 * @return {object} An object of children element
 */
const Icon = ({ icon, color, className, spin }) => {
  const elementStyles = useStyles(
    {
      [css['editor-icon']]: true,
      [styles[`icon--${color}`]]: color,
      [styles['icon--spin']]: spin,
      [css[`${icon}`]]: true
    },
    className
  )

  return <i className={elementStyles} />
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  spin: PropTypes.bool
}

Icon.defaultProps = {
  className: '',
  color: 'default',
  spin: false
}

export default Icon
