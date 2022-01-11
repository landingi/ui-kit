import React from 'react'
import PropTypes from 'prop-types'
import css from './fonts/css/editor-icons.module.scss'
import { styles } from '@helpers/css'
import stylesScss from './Icon.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

const cssClass = styles({ ...css })

/**
 * Icon - stateless presentational component
 * @param {object} props - props
 * @param {string} props.icon - icon name
 * @param {string|array} props.className - list of class names
 * @param {string} props.color - color of icon default, primary
 * @return {object} An object of children element
 */
const Icon = ({ icon, className, color }) => {
  const elementStyles = useStyles({
    [cssClass(className)]: true,
    [cssClass(icon)]: icon,
    [stylesScss[`icon--${color}`]]: color
  })

  return <i className={elementStyles} />
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  color: PropTypes.string
}

Icon.defaultProps = {
  className: 'editor-icon',
  color: 'default'
}

export default Icon
