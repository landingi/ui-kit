import Button from '@components/Button'
import Icon from '@components/Icon'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Accordion.module.scss'

/**
 * AccordionSection - stateless presentational component
 * @param {object} props - props
 * @param {function} props.handleOnClick - handle click event
 * @param {boolean} props.isOpen - determine if section should be open
 * @param {string} props.label - label
 * @param {string} props.children - content
 * @param {string|node} props.arrowLabel
 * @param {string} props.variant
 * @param {boolean|string} props.hasExpand
 * @return {object} An object of children element
 */
const AccordionSection = ({
  handleOnClick,
  isOpen,
  label,
  children,
  arrowLabel,
  variant,
  hasExpand
}) => (
  <div className={styles.accordion}>
    <div
      className={styles.accordion__header}
      onClick={handleOnClick}
      data-testid='accordion-header'
    >
      <div>{label}</div>

      <div>
        {hasExpand &&
          (arrowLabel ? (
            <Button variant={variant} size='small'>
              <span
                className={styles['accordion__header-arrow']}
                data-testid='accordion-arrow'
              >
                {isOpen ? (
                  <Icon icon='icon-chevron-up' data-testid='accordion-icon' />
                ) : (
                  <Icon icon='icon-chevron-down' data-testid='accordion-icon' />
                )}

                {arrowLabel}
              </span>
            </Button>
          ) : isOpen ? (
            <Icon
              size='xs'
              icon='icon-chevron-up'
              data-testid='accordion-icon'
            />
          ) : (
            <Icon
              size='xs'
              icon='icon-chevron-down'
              data-testid='accordion-icon'
            />
          ))}
      </div>
    </div>

    {isOpen && (
      <div className={styles.accordion__text} data-testid='accordion-text'>
        {children}
      </div>
    )}
  </div>
)

AccordionSection.displayName = 'AccordionSection'

AccordionSection.propTypes = {
  isOpen: PropTypes.bool,
  hasExpand: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.node.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf,
    PropTypes.node
  ]),
  handleOnClick: PropTypes.func.isRequired,
  arrowLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(['icon', 'secondary'])
}

AccordionSection.defaultProps = {
  isOpen: false,
  arrowLabel: '',
  variant: 'icon',
  children: [],
  hasExpand: true
}

export default AccordionSection
