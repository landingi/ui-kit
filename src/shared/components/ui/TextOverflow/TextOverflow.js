import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './TextOverflow.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

//TODO TextOverflow css, test
/**
 * TextOverflow - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - childrens
 * @param {string|array} props.className - list of class names, default: overflow
 * @return {object} An object of children element
 */
const TextOverflow = ({ children, className }) => (
  <div className={cssClass(className)}>{children}</div>
)

TextOverflow.displayName = 'TextOverflow'

TextOverflow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

TextOverflow.defaultProps = {
  children: null,
  className: 'overflow'
}

export default TextOverflow
