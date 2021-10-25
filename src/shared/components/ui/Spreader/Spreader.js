import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Spreader.scss'

const cssClass = styles(scss),
  /**
   * Spreader - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: `spreader`
   * @param {string} props.spread - spread size
   * @return {object} An object of children element
   */
  spreader = ({ className, spread }) => (
    <div className={cssClass(className, `spreader--${spread}`)} />
  )

spreader.displayName = 'Spreader'

spreader.propTypes = {
  /**
   * Classname, default `spreader`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Spread
   */
  spread: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'big',
    'huge'
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
spreader.defaultProps = {
  className: 'spreader',
  spread: 'medium'
}

export default spreader
