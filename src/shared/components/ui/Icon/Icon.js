import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import css from './fonts/css/editor-icons.css'
import scss from './Icon.scss'

const cssClass = styles({ ...css, ...scss })

/**
 * Icon - stateless presentational component
 * @param {object} props - props
 * @param {string} props.icon - icon name
 * @param {string} props.color - color of icon default, primary
 * @return {object} An object of children element
 */
const Icon = ({ icon, color }) => (
  <i className={cssClass('editor-icon', icon, `icon--${color}`)} />
)

Icon.displayName = 'Icon'

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string
}

Icon.defaultProps = {
  color: 'default'
}

export default Icon
