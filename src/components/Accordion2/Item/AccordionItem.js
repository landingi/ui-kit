import styles from '@components/Accordion2/Accordion.module.scss'
import Icon from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React, { useCallback,useState } from 'react'

/**
 * Accordion - statefull presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `accordion__item`
 * @param {node} props.title - item title
 * @param {node} props.description - item description
 * @param {node} props.content - item content
 * @param {string} props.padding - accordion padding
 * @param {boolean} props.isBox - item with background & shadow
 * @return {object} An object of children element
 */
const AccordionItem = ({
  className,
  title,
  description,
  content,
  padding,
  isBox
}) => {
  const [isOpen, setOpen] = useState(true)

  /**
   * handleOpen - open section
   * @type {function}
   */
  const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen])

  const itemStyles = useStyles(
    {
      [styles.accordion__item]: true,
      [styles['accordion__item--box']]: isBox
    },
    className
  )

  const titleStyles = useStyles({
    [styles['accordion__item--title']]: true,
    [styles[`accordion__item--title-padding-${padding}`]]: padding
  })

  const descriptionStyles = useStyles({
    [styles['accordion__item--description']]: true,
    [styles[`accordion__item--description-padding-${padding}`]]: padding
  })

  const contentStyles = useStyles({
    [styles['accordion__item--content']]: true,
    [styles[`accordion__item--content-padding-${padding}`]]: padding,
    [styles['accordion__item--content-open']]: isOpen,
    [styles['accordion__item--content-close']]: !isOpen
  })

  return (
    <div className={itemStyles} data-testid='accordion-item'>
      <div
        className={titleStyles}
        onClick={handleOpen}
        data-testid='accordion-item-title'
      >
        <div>{title}</div>

        <Icon icon={isOpen ? 'icon-angle-down' : 'icon-angle-up'} />
      </div>

      {description && (
        <div
          className={descriptionStyles}
          onClick={handleOpen}
          data-testid='accordion-item-description'
        >
          {description}
        </div>
      )}

      <div className={contentStyles} data-testid='accordion-item-content'>
        {content}
      </div>
    </div>
  )
}

AccordionItem.displayName = 'Accordion Item'

AccordionItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  content: PropTypes.node.isRequired,
  padding: PropTypes.oneOf(['none', 'small', 'medium']),
  isBox: PropTypes.bool
}

AccordionItem.defaultProps = {
  className: '',
  description: null,
  padding: 'none',
  isBox: false
}

export default AccordionItem
