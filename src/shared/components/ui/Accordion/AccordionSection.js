import React from 'react'
import PropTypes from 'prop-types'
import scss from './Accordion.scss'
import Button from 'shared/components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from 'shared/helpers/css'

const cssClass = styles(scss)

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
  <div className={scss.accordion}>
    <div className={scss.accordion__header} onClick={handleOnClick}>
      <div>{label}</div>

      <div>
        {hasExpand &&
          (arrowLabel ? (
            <Button variant={variant} size='small'>
              <span className={cssClass('accordion__header-arrow')}>
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

    {isOpen && <div className={scss.accordion__text}>{children}</div>}
  </div>
)

/**
 * Display name
 * @type {string}
 */
AccordionSection.displayName = 'AccordionSection'

/**
 * The properties.
 * @type {Object}
 */
AccordionSection.propTypes = {
  /**
   * determine if section should be open, default 'false'
   */
  isOpen: PropTypes.bool,
  /**
   * has Expand
   */
  hasExpand: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * label
   */
  label: PropTypes.node.isRequired,
  /**
   * content
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf,
    PropTypes.node
  ]),
  /**
   * handle click event on label
   */
  handleOnClick: PropTypes.func.isRequired,
  /**
   * arrowLabel
   */
  arrowLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * button variant
   */
  variant: PropTypes.oneOf(['icon', 'secondary'])
}

/**
 * The default properties.
 * @type {Object}
 */
AccordionSection.defaultProps = {
  isOpen: false,
  arrowLabel: '',
  variant: 'icon',
  children: [],
  hasExpand: true
}

export default AccordionSection
