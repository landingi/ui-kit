import PropTypes from 'prop-types'
import React from 'react'
import styles from './Accordion.module.scss'

/**
 * Accordion Section - stateless presentational component
 * @param {object} props - props
 * @param {function} props.handleOnClick - callback
 * @param {boolean} props.isOpen - determine if section should be open
 * @param {string} props.label - label
 * @param {string} props.children - content
 * @return {object} An object of children element
 */
const AccordionSection = ({ handleOnClick, isOpen, label, children }) => (
  <div className={styles.accordion}>
    <div
      className={styles.accordion__header}
      onClick={handleOnClick}
      data-testid='accordion-header'
    >
      {label}
    </div>

    {isOpen && (
      <div className={styles.accordion__text} data-testid='accordion-text'>
        {children}
      </div>
    )}
  </div>
)

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
