import React from 'react'
import PropTypes from 'prop-types'
import scss from './Accordion.scss'

/**
 * Accordion Section - stateless presentational component
 * @param {object} props - props
 * @param {function} props.handleOnClick - handle click event
 * @param {boolean} props.isOpen - determine if section should be open, dafault: false
 * @param {string} props.label - label
 * @param {string} props.children - content
 * @return {object} An object of children element
 */
function AccordionSection({
  handleOnClick,
  isOpen,
  label,
  children
}) {
  return (
    <div className={scss.accordion}>
      <div
        className={scss.accordion__header}
        onClick={handleOnClick}
      >
        {label}
      </div>

      {isOpen && (
        <div className={scss.accordion__text}>
          {children}
        </div>
      )}
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
AccordionSection.displayName = 'Accordion Section'

/**
 * The properties.
 * @type {Object}
 */
AccordionSection.propTypes = {
  /**
   * Determine if section should be open, default 'false'
   */
  isOpen: PropTypes.bool,
  /**
   * Label
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object)
  ]).isRequired,
  /**
   * Content
   */
  children: PropTypes.string.isRequired,
  /**
   * Handle click event on label
   */
  handleOnClick: PropTypes.func.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
AccordionSection.defaultProps = {
  isOpen: false
}

export default AccordionSection
