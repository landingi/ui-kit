import React, { Fragment, useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { endOfMonth, startOfMonth } from 'date-fns'
import {
  handleRangeMarker,
  monthsArray,
  parseDateToMonthID,
  transformMonthToDate
} from './helpers'
import { styles } from '@helpers/css'
import Icon from '@components/ui/Icon'
import Button from '@components/ui/Button'
import Spacer from '@components/ui/Spacer'
import scss from './MonthRangePicker.scss'

const cssClass = styles(scss)

//TODO MonthRangePicker css, mdx, test
/**
 * MonthRangePicker - stateful component
 * @param {object} props - props
 * @param {func} props.onChange - called on date confirm
 * @param {date} props.minDate - minimal date
 * @param {date} props.maxDate - maximal date
 * @return {object} An object of children element
 */
const MonthRangePicker = ({ onChange, minDate, maxDate }) => {
  const minimalDate = parseDateToMonthID(minDate),
    maximalDate = parseDateToMonthID(maxDate),
    [isSelecting, setSelecting] = useState(false),
    [startMonth, setStartMonth] = useState(null),
    [endMonth, setEndMonth] = useState(null),
    [year, setYear] = useState(2021),
    [confirmedEndMonth, setConfirmedEndMonth] = useState(null)

  useEffect(() => {
    if (confirmedEndMonth) {
      onChange({
        endDate: endOfMonth(
          confirmedEndMonth > startMonth
            ? transformMonthToDate(confirmedEndMonth)
            : transformMonthToDate(startMonth)
        ),
        startDate: startOfMonth(
          confirmedEndMonth > startMonth
            ? transformMonthToDate(startMonth)
            : transformMonthToDate(confirmedEndMonth)
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

  const renderMonths = () =>
    monthsArray.map(({ code, name }) => {
      const monthID = constructMonthID(code)

      const btnClasses = () =>
        cssClass(
          'button_month',
          !isSelecting && 'button_month--not-selecting',
          handleRangeMarker(monthID, endMonth, startMonth) &&
            'button_month--selecting',
          handleRangeMarker(monthID, confirmedEndMonth, startMonth) &&
            'button_month--selected',
          monthID < minimalDate && 'button_month--disabled',
          monthID > maximalDate && 'button_month--disabled',
          handleFirstMarker(monthID) && 'button_month--first',
          handleLastMarker(monthID) && 'button_month--last'
        )

      return (
        <button
          className={btnClasses()}
          key={name}
          onClick={() => handleSelect(monthID)}
          onMouseOver={() => handleHover(monthID)}
          type='button'
        >
          <span className={cssClass('button_month--marker')} />

          <span className={cssClass('button_month--name')}>{name}</span>
        </button>
      )
    })

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
    <Fragment>
      <div className={cssClass('year-container')}>
        <Button
          onClick={useCallback(() => setYear(year - 1), [year])}
          size='tiny'
          variant='icon'
        >
          <Icon icon='icon-arrow-left' />
        </Button>

        <span className={cssClass('year')}>{year}</span>

        <Button
          onClick={useCallback(() => setYear(year + 1), [year])}
          size='tiny'
          variant='icon'
        >
          <Icon icon='icon-arrow-right' />
        </Button>
      </div>

      <Spacer space='tiny' />

      <div className={cssClass('grid-container')}>{renderMonths()}</div>
    </Fragment>
  )
}

MonthRangePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired
}

export default MonthRangePicker
