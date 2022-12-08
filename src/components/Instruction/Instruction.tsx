import { StepNumber } from '@components/StepNumber'
import { generateFakeUuid } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Instruction.module.scss'

interface InstructionProps {
  className?: string | string[]
  data: { content: ReactNode }[]
}

export const Instruction: FC<InstructionProps> = ({ className = '', data }) => {
  const instructionStyles = useStyles(
    {
      [styles.instruction]: true
    },
    className
  )

  return (
    <div className={instructionStyles}>
      {data.map(({ content }, index) => (
        <div className={styles.instruction__step} key={generateFakeUuid()}>
          <StepNumber absolute size='medium' step={index + 1} />

          {content}
        </div>
      ))}
    </div>
  )
}

Instruction.displayName = 'Instruction'
