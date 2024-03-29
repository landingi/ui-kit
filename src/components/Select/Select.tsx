import { generateFakeUuid } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactEventHandler } from 'react'

import Option from './Option'
import styles from './Select.module.scss'

export interface SelectProps {
  value?: number | string
  data: { label: string; value: number | string }[]
  name: string
  onChange?: ReactEventHandler<HTMLSelectElement>
  'data-testid'?: string
}
export const Select: FC<SelectProps> = ({
  value,
  data,
  name,
  onChange,
  'data-testid': dataTestId = 'default-select'
}) => {
  const selectStyles = useStyles({ [styles.select]: true })

  return (
    <select
      className={selectStyles}
      name={name}
      onChange={onChange}
      value={value}
      data-testid={dataTestId}
    >
      {data.map(item => (
        <Option
          key={generateFakeUuid()}
          label={item.label}
          value={item.value}
        />
      ))}
    </select>
  )
}

Select.displayName = 'Select'
