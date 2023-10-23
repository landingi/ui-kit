import styles from '@components/Accordion/Accordion.module.scss'
import { Icon } from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode, useCallback, useState } from 'react'

interface AccordionItemProps {
  className?: string | string[]
  title: ReactNode
  description?: ReactNode
  content: ReactNode
  padding?: 'none' | 'small' | 'medium'
  isBox?: boolean
  isOpenByDefault: boolean
}

export const AccordionItem: FC<AccordionItemProps> = ({
  className = '',
  title,
  description = null,
  content,
  padding = 'none',
  isBox = false,
  isOpenByDefault = true
}) => {
  const [isOpen, setOpen] = useState(isOpenByDefault)

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

AccordionItem.displayName = 'AccordionItem'
