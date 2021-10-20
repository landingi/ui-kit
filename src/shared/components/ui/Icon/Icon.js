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
const icon = ({ icon, color }) => (
  <i className={cssClass('editor-icon', icon, `icon--${color}`)} />
)

/**
 * Display name
 * @type {string}
 */
icon.displayName = 'Editor Icon'

/**
 * The properties.
 * @type {Object}
 */
icon.propTypes = {
  /**
   * Icon name
   */
  icon: PropTypes.string.isRequired,

  /**
   * Icon color
   */
  color: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
icon.defaultProps = {
  color: 'default'
}

export default icon
