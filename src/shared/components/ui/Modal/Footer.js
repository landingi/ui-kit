
import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Modal.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Modal Footer - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.align - alignment
 * @return {object} An object of children element
 */

const modalFooter = ({ children, align }) => {
  const elementClasses = cssClass({
    'modal__footer--align-right': align === 'right'
  })
  return (
    <div className={cssClass(`${scss.modal__footer}`, elementClasses)}>
      {children}
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
modalFooter.displayName = 'Modal.Footer'

/**
 * The properties.
 * @type {Object}
 */
modalFooter.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node.isRequired,
  /**
   * Align
   */
  align: PropTypes.oneOf(['left', 'center', 'right'])
}

/**
 * The default properties.
 * @type {Object}
 */
modalFooter.defaultProps = {
  align: 'right'
}

export default modalFooter
