import React from 'react'
import PropTypes from 'prop-types'
import Button from '@components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Accordion.module.scss'

/**
 * AccordionSection - stateless presentational component
 * @param {object} props - props
 * @param {function} props.handleOnClick - handle click event
 * @param {boolean} props.isOpen - determine if section should be open
 * @param {string} props.label - label
 * @param {string} props.children - content
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
    <div className={styles.accordion__header} onClick={handleOnClick}>
      <div>{label}</div>

      <div>
        {hasExpand &&
          (arrowLabel ? (
            <Button variant={variant} size='small'>
              <span className={styles['accordion__header-arrow']}>
                {isOpen ? (
                  <FontAwesomeIcon icon='chevron-up' />
                ) : (
                  <FontAwesomeIcon icon='chevron-down' />
                )}

                {arrowLabel}
              </span>
            </Button>
          ) : isOpen ? (
            <FontAwesomeIcon size='xs' icon='chevron-up' />
          ) : (
            <FontAwesomeIcon size='xs' icon='chevron-down' />
          ))}
      </div>
    </div>

    {isOpen && <div className={styles.accordion__text}>{children}</div>}
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
