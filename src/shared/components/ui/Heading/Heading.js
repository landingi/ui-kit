import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Heading.scss'

const cssClass = styles(scss)

/**
 * Heading - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {number} props.level - level size, one of: 1, 2, 3, 4, 5, 6, large. Adds css class based on provided level ex. .h1, .h2 etc
 * @param {string|array} props.className- a list of class names, default: `heading`
 * @param {string} props.align - align text `left, center, right`
 * @param {string} props.margin - margin bottom
 * @param {bool} props.bold - bold text
 * @param {string} props.color - text color
 * @return {object} An object of children element
 */
const heading = ({
  children,
  level,
  align,
  className,
  margin,
  bold,
  color
}) => {
  const elementClasses = cssClass({
    'heading--bold': bold,
    'heading--no-margin': margin === 'none',
    'heading--left': align === 'left',
    'heading--center': align === 'center',
    'heading--right': align === 'right',
    'heading__color--white': color === 'white',
    'heading__color--brand': color === 'brand'
  })

  return (
    <span
      className={cssClass(
        className,
        `h${level}`,
        elementClasses
      )}
    >
      {children}
    </span>
  )
}

/**
 * Display name
 * @type {string}
 */
heading.displayName = 'Heading'

/**
 * The properties.
 * @type {Object}
 */
heading.propTypes = {
  /**
   * Children element
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname, default `heading`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Level
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 'large'])
    .isRequired,
  /**
   * Align `left, center, right`
   */
  align: PropTypes.string,
  /**
   *Margin - bottom
   */
  margin: PropTypes.string,
  /**
   *Bold - bold
   */
  bold: PropTypes.bool,
  /**
   * Color - text color
   */
  color: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
heading.defaultProps = {
  className: 'heading',
  align: '',
  margin: '',
  bold: false,
  color: undefined
}

export default heading
