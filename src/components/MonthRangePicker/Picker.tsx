import Button from '@components/Button'
import { Spacer } from '@components/Spacer'
import { useCallback, useState } from 'react'

import { MonthRangePicker } from './MonthRangePicker'
import styles from './MonthRangePicker.module.scss'

export const Picker = ({ minDate, maxDate, onChange, i18n, i18nHandler }) => {
  const [range, setRange] = useState(null)

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

      <Button onClick={useCallback(() => onChange(range), [range])} size='tiny'>
        {i18n.apply}
      </Button>
    </div>
  )
}

Picker.displayName = 'Month Picker Layout Wrapper'

Picker.propTypes = {
  minDate: PropTypes.instanceOf(Date).isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func,
  i18n: PropTypes.shape({ apply: PropTypes.string }),
  i18nHandler: PropTypes.func.isRequired
}

Picker.defaultProps = {
  onChange: () => null,
  i18n: {}
}
