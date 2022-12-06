import { Heading } from '@components/Heading'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Headline.module.scss'

interface HeadlineProps {
  className?: string | string[]
  title: string
}

export const Headline: FC<HeadlineProps> = ({ className = '', title }) => {
  const headlineClasses = useStyles(
    {
      [styles.page__headline]: true
    },
    className
  )

  return (
    <div data-testid='headline' className={headlineClasses}>
      <Heading className='text--truncate' level={1}>
        {title}
      </Heading>
    </div>
  )
}

Headline.displayName = 'Headline'
