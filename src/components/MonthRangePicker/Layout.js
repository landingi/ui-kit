import Button from '@components/Button'
import MonthRangePicker from './MonthRangePicker'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import Spacer from '@components/Spacer'
import styles from './MonthRangePicker.module.scss'

/**
 * Picker - stateful presentational component
 * @param {object} props - props
 * @param {func} props.onChange - called on date confirm
 * @param {date} props.minDate - minimal date
 * @param {date} props.maxDate - maximal date
 * @param {date} props.i18n - object of translations
 * @param {func} props.i18nHandler - callback function to translate keys
 * @return {object} An object of children element
 */
const Picker = ({ minDate, maxDate, onChange, i18n, i18nHandler }) => {
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

export default Picker
