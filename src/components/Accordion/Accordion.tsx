import { generateFakeUuid } from '@helpers/data'
import { FC, memo, ReactNode } from 'react'

import { AccordionItem } from './AccordionItem'

interface AccordionProps {
  data: {
    title: ReactNode
    description?: ReactNode
    content: ReactNode
  }[]
  padding?: 'none' | 'small' | 'medium'
  isBox?: boolean
}

export const Accordion: FC<AccordionProps> = memo<AccordionProps>(
  ({ data, padding = 'medium', isBox = false }: AccordionProps) => (
    <div>
      {data.map(({ title, description, content }) => (
        <AccordionItem
          key={generateFakeUuid()}
          title={title}
          description={description}
          content={content}
          padding={padding}
          isBox={isBox}
        />
      ))}
    </div>
  )
)

Accordion.displayName = 'Accordion'
