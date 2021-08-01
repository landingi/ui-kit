import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Section.scss'

const cssClass = styles(scss)

/**
 * Section - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: section
 * @param {object} props.children - children
 * @param {string} props.space - Space
 * @param {string} props.width - width
 * @param {string} props.background - style
 * @return {object} An object of children element
 */
const section = ({
  className,
  children,
  space,
  width,
  background
}) => (
  <div
    className={cssClass(
      className,
      `section-space--${space}`,
      `layout-width--${width}`,
      `section-bg--${background}`
    )}
  >
    {children}
  </div>
)

/**
 * Display name
 * @type {string}
 */
section.displayName = 'Section'

/**
 * The properties.
 * @type {Object}
 */
section.propTypes = {
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
   *Vetical space default: `medium`
   */
  space: PropTypes.string,
  /**
   *Width default: `medium`
   */
  width: PropTypes.string,
  /**
   *Background: `white`
   */
  background: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
section.defaultProps = {
  className: 'section',
  space: 'medium',
  width: 'full',
  background: 'default'
}

export default section
