import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import scss from './DateTimePicker.scss'
/**
 * https://github.com/Adphorus/react-date-range
 */
import { DateRange } from 'react-date-range'
import { FormattedMessage } from 'react-intl'
import { enUS, pl } from 'date-fns/locale'
import { getAgoDate, getTodayDate } from '@helpers/data'
import { getLanguage } from '@helpers/i18n'
import Button from '@components/ui/Button'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * Date Time Picker - stateless presentational component
   * this component is a wrapper for react-date-range calendar
   * we modify ui and add handler to confirm date pick
   * @param {object} props - props
   * @param {function} props.setDate - date handler
   * @param {string} props.minDate - defines minimum date - disabled earlier dates
   */
  dateTimePicker = ({ setDate, minDate }) => {
    const [state, setState] = useState([
        {
          endDate: getTodayDate(),
          key: 'selection',
          startDate: getAgoDate(7)
        }
      ]),
      addElements = () => {
        document
          .querySelector('.rdrNextButton i')
          .classList.add('fas', 'fa-arrow-right')
        document
          .querySelector('.rdrPprevButton i')
          .classList.add('fas', 'fa-arrow-left')
        const monthArrow = document.createElement('i'),
          yearArrow = document.createElement('i')
        monthArrow.classList.add('fas', 'fa-caret-down')
        yearArrow.classList.add('fas', 'fa-caret-down')
        document.querySelector('.rdrMonthPicker').append(monthArrow)
        document.querySelector('.rdrYearPicker').append(yearArrow)
      }

    React.useEffect(() => {
      addElements()
    }, [])

    const handleApply = useCallback(() => setDate(...state))

    return (
      <div className={cssClass('react-datetimepicker')}>
        <DateRange
          direction='horizontal'
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

        <Button onClick={handleApply} size='tiny'>
          <FormattedMessage id='word.apply' />
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
  minDate: PropTypes.string,
  setDate: PropTypes.func.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
dateTimePicker.defaultProps = {
  minDate: null
}

export default dateTimePicker
