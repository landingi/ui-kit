import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Modal.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * Modal Footer - stateless presentational component
   * @param {object} props - props
   * @param {object} props.children - children
   * @param {string} props.align - alignment
   * @return {object} An object of children element
   */

  modalFooter = ({ children, align }) => {
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
   * Align
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),

  /**
   * Children elements
   */
  children: PropTypes.node.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
modalFooter.defaultProps = {
  align: 'right'
}

export default modalFooter
