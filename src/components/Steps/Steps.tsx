import { StepNumber } from '@components/StepNumber'
import { generateFakeUuid } from '@helpers/data'
import { FC } from 'react'

import styles from './Steps.module.scss'

export interface StepsProps {
  data: { variant: 'completed' | 'current' | 'next'; description: string }[]
}

const Steps: FC<StepsProps> = ({ data }) => (
  <div className={styles.container}>
    {data.map((item, index) => {
      const step = index + 1
      const { variant, description } = item

      return (
        <div className={styles.step} key={generateFakeUuid()}>
          <StepNumber step={step} variant={variant} />

          <span className={styles[`step__description--${variant}`]}>
            {description}
          </span>
        </div>
      )
    })}
  </div>
)

Steps.displayName = 'Steps'

export default Steps
