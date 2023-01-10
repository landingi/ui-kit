import { ColorLine } from '@components/ColorLine'
import { generateFakeUuid } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Legend.module.scss'

export interface LegendProps {
  className?: string | string[]
  data: { range: string; variant: 'alert' | 'warning' | 'success' | 'info' }[]
  alignment?: 'vertical' | 'horizontal'
}

const Legend: FC<LegendProps> = ({
  className,
  data,
  alignment = 'vertical'
}) => {
  const wrapperClasses = useStyles(
    {
      [styles.container]: true,
      [styles[`container--${alignment}`]]: alignment
    },
    className
  )

  const elementClasses = useStyles({
    [styles.legend]: true
  })

  return (
    <div data-testid='legend-container' className={wrapperClasses}>
      {data.map(({ variant, range }) => (
        <span
          data-testid='legend'
          key={generateFakeUuid()}
          className={elementClasses}
        >
          <ColorLine variant={variant} alignment='horizontal' />
          {range}
        </span>
      ))}
    </div>
  )
}

Legend.displayName = 'Legend'

export default Legend
