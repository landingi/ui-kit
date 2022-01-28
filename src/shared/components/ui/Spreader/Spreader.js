import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Spreader.scss'

const cssClass = styles(scss)

//TODO Spreader css, test
/**
 * Spreader - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `spreader`
 * @param {string} props.spread - spread size
 * @return {object} An object of children element
 */
const Spreader = ({ className, spread }) => (
  <div className={cssClass(className, `spreader--${spread}`)} />
)

Spreader.displayName = 'Spreader'

Spreader.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  spread: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'x-large',
    'big',
    'huge'
  ])
}

Spreader.defaultProps = {
  className: 'spreader',
  spread: 'medium'
}

export default Spreader
