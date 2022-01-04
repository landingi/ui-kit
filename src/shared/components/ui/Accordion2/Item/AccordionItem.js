import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Icon from '@components/ui/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './../Accordion.module.scss'

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

  const titleStyles = useStyles({
    [styles['accordion__item--title']]: true,
    [styles['accordion__item--title-small']]: size === 'small',
    [styles['accordion__item--title-medium']]: size === 'medium'
  })

  const contentStyles = useStyles({
    [styles['accordion__item--content']]: true,
    [styles['accordion__item--content-small']]: size === 'small',
    [styles['accordion__item--content-medium']]: size === 'medium',
    [styles['accordion__item--content-open']]: isOpen,
    [styles['accordion__item--content-close']]: !isOpen
  })

  return (
    <div className={className}>
      <div className={titleStyles} onClick={handleOpen}>
        <div>{title}</div>

        <Icon icon={isOpen ? 'icon-angle-down' : 'icon-angle-up'} />
      </div>

      <div className={contentStyles}>{content}</div>
    </div>
  )
}

AccordionItem.displayName = 'Accordion Item'

AccordionItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium'])
}

AccordionItem.defaultProps = {
  className: styles.accordion__item,
  size: 'medium'
}

export default AccordionItem
