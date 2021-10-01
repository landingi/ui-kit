import { FormattedMessage } from 'react-intl'
import { styles } from '@helpers/css'
import Button from '@components/ui/Button'
import MonthRangePicker from './MonthRangePicker'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import Spacer from '@components/ui/Spacer'
import scss from './MonthRangePicker.scss'

const cssClass = styles(scss),
  /**
   * Picker - statefull presentational component
   * @param {object} props - props
   * @param {func} props.onChange - called on date confirm
   * @param {date} props.minDate - minimal date
   * @param {date} props.maxDate - maximal date
   * @return {object} An object of children element
   */
  picker = ({ minDate, maxDate, onChange }) => {
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

        <Button
          onClick={useCallback(() => onChange(range), [range])}
          size='tiny'
        >
          <FormattedMessage id='word.apply' />
        </Button>
      </div>
    )
  }

export default picker

/**
 * Display name
 * @type {string}
 */
picker.displayName = 'Month Picker Layout Wrapper'

/**
 * The properties.
 * @type {Object}
 */
picker.propTypes = {
  /**
   * Date
   */
  minDate: PropTypes.instanceOf(Date).isRequired,

  /**
   * OnChange callback
   */
  onChange: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
picker.defaultProps = {
  onChange: () => null
}
