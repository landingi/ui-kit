import { styles } from '@helpers/css'
import Button from '@components/ui/Button'
import MonthRangePicker from './MonthRangePicker'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import Spacer from '@components/ui/Spacer'
import scss from './MonthRangePicker.scss'

const cssClass = styles(scss)

/**
 * Picker - stateful presentational component
 * @param {object} props - props
 * @param {func} props.onChange - called on date confirm
 * @param {date} props.minDate - minimal date
 * @param {date} props.maxDate - maximal date
 * @param {date} props.i18n - object of translations
 * @return {object} An object of children element
 */
const Picker = ({ minDate, maxDate, onChange, i18n }) => {
  const [range, setRange] = useState(null)

  return (
    <div className={cssClass('month-range-picker')}>
      <Spacer space='tiny' />

      <MonthRangePicker
        maxDate={maxDate}
        minDate={minDate}
        onChange={setRange}
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
  onChange: PropTypes.func,
  i18n: PropTypes.shape({ apply: PropTypes.string })
}

Picker.defaultProps = {
  onChange: () => null,
  i18n: {}
}

export default Picker
