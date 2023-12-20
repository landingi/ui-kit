import { generateFakeUuid } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, memo, ReactNode } from 'react'

import { AccordionItem } from './AccordionItem'

export interface AccordionProps {
  data: {
    title: ReactNode
    description?: ReactNode
    content: ReactNode
  }[]
  padding?: 'none' | 'small' | 'medium'
  isBox?: boolean
  isOpenByDefault?: boolean
  spaceBetweenItems?: 20
  height?: 68
  className?: string | string[]
}

export const Accordion: FC<AccordionProps> = memo<AccordionProps>(
  ({
    data,
    padding = 'medium',
    isBox = false,
    isOpenByDefault = true,
    spaceBetweenItems,
    height,
    className
  }: AccordionProps) => {
    const styles = useStyles({}, className)

    return (
      <div className={styles}>
        {data.map(({ title, description, content }) => (
          <AccordionItem
            key={generateFakeUuid()}
            title={title}
            description={description}
            content={content}
            padding={padding}
            isBox={isBox}
            isOpenByDefault={isOpenByDefault}
            spaceBetweenItems={spaceBetweenItems}
            height={height}
          />
        ))}
      </div>
    )
  }
)

Accordion.displayName = 'Accordion'
