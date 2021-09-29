import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Heading.scss'

const cssClass = styles(scss),
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
  heading = ({
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
      'heading--center': align === 'center',
      'heading--left': align === 'left',
      'heading--no-margin': margin === 'none',
      'heading--right': align === 'right',
      'heading__color--brand': color === 'brand',
      'heading__color--white': color === 'white'
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
   * Align `left, center, right`
   */
  align: PropTypes.string,

  /**
   *Bold - bold
   */
  bold: PropTypes.bool,

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
   * Color - text color
   */
  color: PropTypes.string,

  /**
   * Level
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 'large'])
    .isRequired,

  /**
   *Margin - bottom
   */
  margin: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
heading.defaultProps = {
  align: '',
  bold: false,
  className: 'heading',
  color: undefined,
  margin: ''
}

export default heading
