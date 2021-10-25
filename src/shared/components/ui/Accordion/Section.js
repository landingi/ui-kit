import PropTypes from 'prop-types'
import React from 'react'
import scss from './Accordion.scss'

/**
 * Accordion Section - stateless presentational component
 * @param {object} props - props
 * @param {function} props.handleOnClick - callback
 * @param {boolean} props.isOpen - determine if section should be open
 * @param {string} props.label - label
 * @param {string} props.children - content
 * @return {object} An object of children element
 */
function AccordionSection({ handleOnClick, isOpen, label, children }) {
  return (
    <div className={scss.accordion}>
      <div className={scss.accordion__header} onClick={handleOnClick}>
        {label}
      </div>

      {isOpen && <div className={scss.accordion__text}>{children}</div>}
    </div>
  )
}

AccordionSection.displayName = 'Accordion Section'

AccordionSection.propTypes = {
  children: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)])
    .isRequired
}

AccordionSection.defaultProps = {
  isOpen: false
}

export default AccordionSection
