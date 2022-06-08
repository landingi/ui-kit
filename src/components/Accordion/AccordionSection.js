import React from 'react'
import PropTypes from 'prop-types'
import Button from '@components/Button'
import styles from './Accordion.module.scss'
import Icon from '@components/Icon'

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
    <div className={styles.accordion__header} onClick={handleOnClick}>
      <div>{label}</div>

      <div>
        {hasExpand &&
          (arrowLabel ? (
            <Button variant={variant} size='small'>
              <span className={styles['accordion__header-arrow']}>
                {isOpen ? (
                  <Icon icon='icon-chevron-up' />
                ) : (
                  <Icon icon='icon-chevron-down' />
                )}

                {arrowLabel}
              </span>
            </Button>
          ) : isOpen ? (
            <Icon size='xs' icon='icon-chevron-up' />
          ) : (
            <Icon size='xs' icon='icon-chevron-down' />
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
