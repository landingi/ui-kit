import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './../Accordion.scss'
import Icon from 'shared/components/ui/Icon'

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
const AccordionItem = ({ className, title, content, size }) => {
  const [isOpen, setOpen] = useState(true)

  /**
   * handleOpen - open section
   * @type {function}
   */
  const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen])

  return (
    <div className={cssClass(className)}>
      <div
        className={cssClass(
          'accordion__item--title',
          `accordion__item--title-${size}`
        )}
        onClick={handleOpen}
      >
        <div>{title}</div>

        <Icon icon={isOpen ? 'icon-angle-down' : 'icon-angle-up'} />
      </div>

      <div
        className={cssClass(
          'accordion__item--content',
          `accordion__item--content-${size}`,
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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Title
   */
  title: PropTypes.node.isRequired,
  /**
   * Content
   */
  content: PropTypes.node.isRequired,
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium']).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
AccordionItem.defaultProps = {
  className: 'accordion__item'
}

export default AccordionItem
