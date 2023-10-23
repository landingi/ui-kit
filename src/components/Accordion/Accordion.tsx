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
  className?: string | string[]
}

export const Accordion: FC<AccordionProps> = memo<AccordionProps>(
  ({
    data,
    padding = 'medium',
    isBox = false,
    isOpenByDefault = true,
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
          />
        ))}
      </div>
    )
  }
)

Accordion.displayName = 'Accordion'
