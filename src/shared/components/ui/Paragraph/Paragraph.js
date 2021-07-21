import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Paragraph.scss'

const cssClass = styles(scss)

/**
 * Paragraph - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: paragraph
 * @param {object} props.children - children
 * @param {string} props.color - color
 * @param {number} props.size - size
 * @param {string} props.align - align
 * @param {string} props.padding - padding
 * @param {number} props.line - line height
 * @param {number} props.weight - font weight
 * @return {object} An object of children element
 */
const paragraph = ({
  className,
  children,
  color,
  size,
  align,
  padding,
  line,
  weight
}) => (
  <p
    className={cssClass(className,
      color ? `${className}-color--${color}` : undefined,
      size ? `${className}-size--${size}` : undefined,
      padding ? `${className}-padding--${padding}` : undefined,
      align ? `${className}-align--${align}` : undefined,
      line ? `${className}-line--${line}` : undefined,
      weight ? `${className}-weight--${weight}` : undefined)}>
    {children}
  </p>
)

/**
 * Display name
 * @type {string}
 */
paragraph.displayName = 'Paragraph'

/**
 * The properties.
 * @type {Object}
 */
paragraph.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname, default `section`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Color, default `accent-1`
   */
  color: PropTypes.string,
  /**
   * Size, default `14`
   */
  size: PropTypes.number,
  /**
   * Align, default `undefined`
   */
  align: PropTypes.string,
  /**
   * Padding, default `medium`
   */
  padding: PropTypes.string,
  /**
   * line, default `medium`
   */
  line: PropTypes.number,
  /**
   * weight, default `300`
   */
  weight: PropTypes.number
}

/**
 * The default properties.
 * @type {Object}
 */
paragraph.defaultProps = {
  className: 'paragraph',
  color: 'accent-1',
  size: 14,
  align: undefined,
  padding: 'medium',
  line: 18,
  weight: 400
}

export default paragraph
