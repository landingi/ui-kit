import './DateTimePicker.scss'

import Button from '@components/Button'
import { getAgoDate, getTodayDate } from '@helpers/data'
import { getLanguage } from '@helpers/i18n'
import { enUS,pl } from 'date-fns/locale'
import PropTypes from 'prop-types'
import React, { Fragment, useCallback, useEffect,useState } from 'react'
import { Calendar,DateRange } from 'react-date-range'

/**
 * Date Time Picker - stateless presentational component
 * this component is a wrapper for react-date-range calendar
 * we modify ui and add handler to confirm date pick
 * @param {object} props - props
 * @param {function} props.setDate - date handler
 * @param {string} props.minDate - defines minimum date - disabled earlier dates
 * @param {object} props.i18n
 * @param {date} props.maxDate - defines maximum date - disabled later dates (Calendar)
 * @param {bool} props.oneDatePicker - should render picker for one date - disabled date ranges
 * @param {date} props.selectedDateCalendar - defines selected date for calendar
 * @param {bool} props.showMonthAndYearPickers - should render select list for month and year
 */
const DateTimePicker = ({
  setDate,
  minDate,
  maxDate,
  oneDatePicker,
  selectedDateCalendar,
  showMonthAndYearPickers,
  i18n
}) => {
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
      .classList.add(
        'editor-icons-module__editor-icon',
        'editor-icons-module__editor-icon--12',
        'editor-icons-module__icon-arrow-right',
        'Icon-module__icon--color-3'
      )
    document
      .querySelector('.rdrPprevButton i')
      .classList.add(
        'editor-icons-module__editor-icon',
        'editor-icons-module__editor-icon--12',
        'editor-icons-module__icon-arrow-left',
        'Icon-module__icon--color-3'
      )

    if (showMonthAndYearPickers) {
      const monthArrow = document.createElement('i')
      const yearArrow = document.createElement('i')
      monthArrow.classList.add(
        'editor-icons-module__editor-icon',
        'editor-icons-module__editor-icon--12',
        'editor-icons-module__icon-caret-down',
        'Icon-module__icon--color-3'
      )
      yearArrow.classList.add(
        'editor-icons-module__editor-icon',
        'editor-icons-module__editor-icon--12',
        'editor-icons-module__icon-caret-down',
        'Icon-module__icon--color-3'
      )
      document.querySelector('.rdrMonthPicker').append(monthArrow)
      document.querySelector('.rdrYearPicker').append(yearArrow)
    }
  }

  useEffect(() => {
    addElements()
  }, [])

  const handleApply = useCallback(() => setDate(...state))

  const handleChange = item => setState([item.selection])

  return (
    <div className='react-datetimepicker'>
      {oneDatePicker ? (
        <Calendar
          date={selectedDateCalendar || new Date()}
          onChange={setDate}
          locale={getLanguage === 'pl' ? pl : enUS}
          minDate={minDate ? new Date(minDate) : undefined}
          maxDate={maxDate}
          color='#EDECEC'
          showMonthAndYearPickers={showMonthAndYearPickers}
          direction='horizontal'
        />
      ) : (
        <Fragment>
          <DateRange
            locale={getLanguage === 'pl' ? pl : enUS}
            onChange={handleChange}
            showSelectionPreview
            moveRangeOnFirstSelection={false}
            rangeColors={['#EDECEC']}
            months={1}
            ranges={state}
            showDateDisplay={false}
            direction='horizontal'
            weekStartsOn={1}
            maxDate={new Date()}
            minDate={minDate ? new Date(minDate) : undefined}
            showMonthAndYearPickers={showMonthAndYearPickers}
          />
          <Button onClick={handleApply} size='tiny' data-testid='apply-button'>
            {i18n.apply}
          </Button>
        </Fragment>
      )}
    </div>
  )
}

DateTimePicker.displayName = 'DateTimePicker'

DateTimePicker.propTypes = {
  setDate: PropTypes.func.isRequired,
  minDate: PropTypes.string,
  maxDate: PropTypes.instanceOf(Date),
  oneDatePicker: PropTypes.bool,
  selectedDateCalendar: PropTypes.instanceOf(Date),
  showMonthAndYearPickers: PropTypes.bool,
  i18n: PropTypes.shape({
    apply: PropTypes.string
  })
}

DateTimePicker.defaultProps = {
  minDate: null,
  maxDate: undefined,
  oneDatePicker: false,
  showMonthAndYearPickers: true,
  i18n: {}
}

export default DateTimePicker
