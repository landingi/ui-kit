import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Spacer.scss'

const cssClass = styles(scss),
  /**
   * Spacer - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: `spacer`
   * @param {string} props.space - space size
   * @return {object} An object of children element
   */
  spacer = ({ className, space }) => (
    <div className={cssClass(className, `spacer--${space}`)} />
  )

/**
 * Display name
 * @type {string}
 */
spacer.displayName = 'Spacer'

/**
 * The properties.
 * @type {Object}
 */
spacer.propTypes = {
  /**
   * Classname, default `spacer`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Space
   */
  space: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'big', 'huge'])
}

/**
 * The default properties.
 * @type {Object}
 */
spacer.defaultProps = {
  className: 'spacer',
  space: 'medium'
}

export default spacer
