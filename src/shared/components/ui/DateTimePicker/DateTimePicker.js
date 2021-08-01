import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './DateTimePicker.scss'
/**
 * https://github.com/Adphorus/react-date-range
 */
import { DateRange } from 'react-date-range'
import Button from '@components/ui/Button'
import { FormattedMessage } from 'react-intl'
import { getAgoDate, getTodayDate } from '@helpers/data'
import { pl, enUS } from 'date-fns/locale'
import { getLanguage } from '@helpers/i18n'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Date Time Picker - stateless presentational component
 * this component is a wrapper for react-date-range calendar
 * we modify ui and add handler to confirm date pick
 * @param {object} props - props
 * @param {function} props.setDate - date handler
 * @param {string} props.minDate - defines minimum date - disabled earlier dates
 */
const dateTimePicker = ({ setDate, minDate }) => {
  const [state, setState] = useState([
    {
      startDate: getAgoDate(7),
      endDate: getTodayDate(),
      key: 'selection'
    }
  ])

  const addElements = () => {
    document
      .querySelector('.rdrNextButton i')
      .classList.add('fas', 'fa-arrow-right')
    document
      .querySelector('.rdrPprevButton i')
      .classList.add('fas', 'fa-arrow-left')
    const monthArrow = document.createElement('i')
    const yearArrow = document.createElement('i')
    monthArrow.classList.add('fas', 'fa-caret-down')
    yearArrow.classList.add('fas', 'fa-caret-down')
    document
      .querySelector('.rdrMonthPicker')
      .append(monthArrow)
    document
      .querySelector('.rdrYearPicker')
      .append(yearArrow)
  }

  React.useEffect(() => {
    addElements()
  }, [])

  const handleApply = useCallback(() => setDate(...state))

  return (
    <div className={cssClass('react-datetimepicker')}>
      <DateRange
        direction="horizontal"
        // eslint-disable-next-line react/jsx-no-bind
        locale={getLanguage === 'pl' ? pl : enUS}
        maxDate={new Date()}
        minDate={minDate ? new Date(minDate) : undefined}
        months={1}
        moveRangeOnFirstSelection={false}
        onChange={item => setState([item.selection])}
        rangeColors={['#EDECEC']}
        ranges={state}
        showDateDisplay={false}
        showSelectionPreview
        weekStartsOn={1}
      />

      <Button onClick={handleApply}
size="tiny">
        <FormattedMessage id="word.apply" />
      </Button>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
dateTimePicker.displayName = 'Date time picker'

/**
 * The properties.
 * @type {Object}
 */
dateTimePicker.propTypes = {
  setDate: PropTypes.func.isRequired,
  minDate: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
dateTimePicker.defaultProps = {
  minDate: null
}

export default dateTimePicker
