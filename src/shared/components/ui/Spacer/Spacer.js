import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Spacer.scss'

const cssClass = styles(scss)

/**
 * Spacer - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `spacer`
 * @param {string} props.space - space size
 * @return {object} An object of children element
 */
const spacer = ({ className, space }) => (
  <div className={cssClass(className, `spacer--${space}`)} />
)

spacer.displayName = 'Spacer'

spacer.propTypes = {
  /**
   * Classname, default `spacer`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Space
   */
  space: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'x-large',
    'huge'
  ])
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
