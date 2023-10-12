import './DateTimePicker.scss'

import { Button } from '@components/Button'
import { getAgoDate, getTodayDate } from '@helpers/data'
import { getLanguage } from '@helpers/i18n'
import { enUS, pl, pt } from 'date-fns/locale'
import { FC, Fragment, useCallback, useEffect, useState } from 'react'
import { Calendar, DateRange, RangeKeyDict } from 'react-date-range'

type SetDateArgs =
  | {
      startDate?: Date
      endDate?: Date
    }
  | Date

export interface DateTimePickerProps {
  setDate: (setDateArgs: SetDateArgs) => void
  minDate?: string | Date
  maxDate?: string | Date
  oneDatePicker?: boolean
  selectedDateCalendar?: Date
  showMonthAndYearPickers?: boolean
  i18n: {
    apply: string
  }
}

export const DateTimePicker: FC<DateTimePickerProps> = ({
  setDate,
  minDate,
  maxDate,
  oneDatePicker,
  selectedDateCalendar,
  showMonthAndYearPickers = true,
  i18n
}) => {
  const [state, setState] = useState<
    {
      startDate?: Date
      endDate?: Date
      key: string
    }[]
  >([
    {
      startDate: getAgoDate(7),
      endDate: getTodayDate(),
      key: 'selection'
    }
  ])

  const addElements = useCallback(() => {
    document
      .querySelector('.rdrNextButton i')
      ?.classList.add(
        'editor-icons-module__editor-icon',
        'editor-icons-module__editor-icon--12',
        'editor-icons-module__icon-arrow-right',
        'Icon-module__icon--color-3'
      )

    document
      .querySelector('.rdrPprevButton i')
      ?.classList.add(
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

      document.querySelector('.rdrMonthPicker')?.append(monthArrow)
      document.querySelector('.rdrYearPicker')?.append(yearArrow)
    }
  }, [showMonthAndYearPickers])

  useEffect(() => {
    addElements()
  }, [addElements])

  const handleApply = useCallback(() => {
    const { startDate, endDate } = state[0]

    setDate({ startDate, endDate })
  }, [setDate, state])

  const handleChange = (item: RangeKeyDict) =>
    setState([
      {
        ...item.selection,
        key: 'selection'
      }
    ])

  const locale = {
    pl,
    pt,
    en: enUS
  }

  return (
    <div className='react-datetimepicker'>
      {oneDatePicker && (
        <Calendar
          date={selectedDateCalendar || new Date()}
          onChange={setDate}
          locale={locale[getLanguage] ?? enUS}
          minDate={minDate ? new Date(minDate) : undefined}
          maxDate={maxDate ? new Date(maxDate) : undefined}
          color='#EDECEC'
          showMonthAndYearPickers={showMonthAndYearPickers}
          direction='horizontal'
        />
      )}

      {!oneDatePicker && (
        <Fragment>
          <DateRange
            locale={locale[getLanguage] ?? enUS}
            onChange={handleChange}
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
