import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './../Accordion.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StepNumber from '@components/ui/StepNumber'

const cssClass = styles(scss)

/**
 * Accordion - statefull presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `accordion__item`
 * @param {number} props.number - item number
 * @param {node} props.title - item title
 * @param {node} props.content - item content
 * @return {object} An object of children element
 */
function AccordionItem({
  className,
  number,
  title,
  content
}) {
  const [isOpen, setOpen] = useState(false),
    /**
     * HandleOpen - open section
     * @type {function}
     */
    handleOpen = useCallback(
      () => setOpen(!isOpen),
      [isOpen]
    )

  return (
    <div className={cssClass(className)}>
      <div
        className={cssClass('accordion__item--title')}
        onClick={handleOpen}
      >
        <div>
          {number && (
            <StepNumber size='medium' step={number} />
          )}

          {title}
        </div>

        <FontAwesomeIcon
          icon={isOpen ? 'chevron-up' : 'chevron-down'}
          size='xs'
        />
      </div>

      <div
        className={cssClass(
          'accordion__item--content',
          isOpen
            ? 'accordion__item--content-open'
            : 'accordion__item--content-close'
        )}
      >
        {content}
      </div>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
AccordionItem.displayName = 'Accordion Item'

/**
 * The properties.
 * @type {Object}
 */
AccordionItem.propTypes = {
  /**
   * Classname
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Number
   */
  number: PropTypes.number,
  /**
   * Title
   */
  title: PropTypes.node.isRequired,
  /**
   * Content
   */
  content: PropTypes.node.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
AccordionItem.defaultProps = {
  className: 'accordion__item',
  number: null
}

export default AccordionItem
