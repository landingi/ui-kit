/* eslint-disable react/jsx-no-bind */
import React, {
  Fragment,
  useState,
  useEffect,
  useCallback
} from 'react'
import { styles } from '@helpers/css'
import scss from './MonthRangePicker.scss'
import Spacer from '@components/ui/Spacer'
import Button from '@components/ui/Button'
import { endOfMonth, startOfMonth } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'
import {
  monthsArray,
  handleRangeMarker,
  parseDateToMonthID,
  transformMonthToDate
} from './helpers'

const cssClass = styles(scss)

/**
 * MonthRangePicker - statefull component
 * @param {object} props - props
 * @param {func} props.onChange - called on date confirm
 * @param {date} props.minDate - minimal date
 * @param {date} props.maxDate - maximal date
 * @return {object} An object of children element
 */
const monthRangePicker = ({
  onChange,
  minDate,
  maxDate
}) => {
  const minimalDate = parseDateToMonthID(minDate)
  const maximalDate = parseDateToMonthID(maxDate)

  const [isSelecting, setSelecting] = useState(false)
  const [startMonth, setStartMonth] = useState(null)
  const [endMonth, setEndMonth] = useState(null)
  const [year, setYear] = useState(2021)
  const [confirmedEndMonth, setConfirmedEndMonth] =
    useState(null)

  useEffect(() => {
    if (confirmedEndMonth) {
      onChange({
        startDate: startOfMonth(
          confirmedEndMonth > startMonth
            ? transformMonthToDate(startMonth)
            : transformMonthToDate(confirmedEndMonth)
        ),
        endDate: endOfMonth(
          confirmedEndMonth > startMonth
            ? transformMonthToDate(confirmedEndMonth)
            : transformMonthToDate(startMonth)
        )
      })
    }
  }, [confirmedEndMonth])

  const handleSelect = monthID => {
    if (isSelecting) {
      setSelecting(false)
      setConfirmedEndMonth(monthID)
      setEndMonth(null)
    } else {
      setSelecting(true)
      setStartMonth(monthID)
      setConfirmedEndMonth(null)
    }
  }

  const handleHover = monthID => {
    isSelecting && setEndMonth(monthID)
  }

  const constructMonthID = monthIndex => {
    return parseInt(`${year}${monthIndex}`)
  }

  const renderMonths = () => {
    return monthsArray.map(({ code, name }) => {
      const monthID = constructMonthID(code)

      return (
        <button
          className={cssClass(
            'button_month',
            !isSelecting && 'button_month--not-selecting',
            handleRangeMarker(
              monthID,
              endMonth,
              startMonth
            ) && 'button_month--selecting',
            handleRangeMarker(
              monthID,
              confirmedEndMonth,
              startMonth
            ) && 'button_month--selected',
            monthID < minimalDate &&
              'button_month--disabled',
            monthID > maximalDate &&
              'button_month--disabled',
            handleFirstMarker(monthID) &&
              'button_month--first',
            handleLastMarker(monthID) &&
              'button_month--last'
          )}
          key={monthID}
          onClick={() => handleSelect(monthID)}
          onMouseOver={() => handleHover(monthID)}
          type="button"
        >
          <span
            className={cssClass('button_month--marker')}
          />

          <span className={cssClass('button_month--name')}>
            <FormattedMessage id={name} />
          </span>
        </button>
      )
    })
  }

  const handleFirstMarker = monthID => {
    const currentEndMonth = confirmedEndMonth || endMonth

    if (!startMonth) {
      return false
    }

    if (!currentEndMonth) {
      return startMonth === monthID
    }

    return currentEndMonth > startMonth
      ? startMonth === monthID
      : currentEndMonth === monthID
  }

  const handleLastMarker = monthID => {
    const currentEndMonth = confirmedEndMonth || endMonth

    return currentEndMonth < startMonth
      ? startMonth === monthID
      : currentEndMonth === monthID
  }

  return (
    <>
      <div className={cssClass('year-container')}>
        <Button
          onClick={useCallback(
            () => setYear(year - 1),
            [year]
          )}
          size="tiny"
          variant="icon"
        >
          <FontAwesomeIcon icon="arrow-left" />
        </Button>

        <span className={cssClass('year')}>{year}</span>

        <Button
          onClick={useCallback(
            () => setYear(year + 1),
            [year]
          )}
          size="tiny"
          variant="icon"
        >
          <FontAwesomeIcon icon="arrow-right" />
        </Button>
      </div>

      <Spacer space="tiny" />

      <div className={cssClass('grid-container')}>
        {renderMonths()}
      </div>
    </>
  )
}

export default monthRangePicker
