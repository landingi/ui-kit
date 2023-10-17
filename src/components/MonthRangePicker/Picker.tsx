import { Button } from '@components/Button'
import { Spacer } from '@components/Spacer'
import { FC, useCallback, useState } from 'react'

import { MonthRangePicker } from './MonthRangePicker'
import styles from './MonthRangePicker.module.scss'

export interface PickerProps {
  minDate: Date
  maxDate: Date
  onChange?: (range: { startDate: Date; endDate: Date } | null) => void
  i18n?: {
    apply: string
  }
  i18nHandler?: (translation: string) => string
}

export const Picker: FC<PickerProps> = ({
  minDate,
  maxDate,
  onChange = () => {},
  i18n = { apply: 'apply' },
  i18nHandler = translation => translation
}) => {
  const [range, setRange] = useState<{ startDate: Date; endDate: Date } | null>(
    null
  )

  const handleApply = useCallback(() => onChange(range), [range, onChange])

  return (
    <div
      data-testid='layoutMonthRangePicker'
      className={styles['month-range-picker']}
    >
      <Spacer space='tiny' />

      <MonthRangePicker
        maxDate={maxDate}
        minDate={minDate}
        onChange={setRange}
        i18nHandler={i18nHandler}
      />

      <Spacer space='tiny' />

      <Button onClick={handleApply} size='tiny'>
        {i18n.apply}
      </Button>
    </div>
  )
}

Picker.displayName = 'MonthPickerLayoutWrapper'
