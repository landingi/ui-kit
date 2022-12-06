import Button from '@components/Button'
import Icon from '@components/Icon'
import { Spacer } from '@components/Spacer'
import { useStyles } from '@helpers/hooks/useStyles'
import { endOfMonth, startOfMonth } from 'date-fns'
import PropTypes from 'prop-types'
import React, { Fragment, useCallback, useEffect, useState } from 'react'

import {
  handleRangeMarker,
  monthsArray,
  parseDateToMonthID,
  transformMonthToDate
} from './helpers'
import styles from './MonthRangePicker.module.scss'

/**
 * MonthRangePicker - stateful component
 * @param {object} props - props
 * @param {func} props.onChange - called on date confirm
 * @param {date} props.minDate - minimal date
 * @param {date} props.maxDate - maximal date
 * @param {func} props.i18nHandler - callback function to translate keys
 * @return {object} An object of children element
 */
const MonthRangePicker = ({ onChange, minDate, maxDate, i18nHandler }) => {
  const minimalDate = parseDateToMonthID(minDate)
  const maximalDate = parseDateToMonthID(maxDate)
  const [isSelecting, setSelecting] = useState(false)
  const [startMonth, setStartMonth] = useState(null)
  const [endMonth, setEndMonth] = useState(null)
  const [year, setYear] = useState(2021)
  const [confirmedEndMonth, setConfirmedEndMonth] = useState(null)

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

  const constructMonthID = monthIndex => parseInt(`${year}${monthIndex}`)

  const renderMonths = () =>
    monthsArray.map(({ code, name }) => {
      const monthID = constructMonthID(code)

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const buttonClasses = useStyles({
        [styles.button_month]: true,
        [styles['button_month--not-selecting']]: !isSelecting,
        [styles['button_month--selecting']]: handleRangeMarker(
          monthID,
          endMonth,
          startMonth
        ),
        [styles['button_month--selected']]: handleRangeMarker(
          monthID,
          confirmedEndMonth,
          startMonth
        ),
        [styles['button_month--disabled']]:
          monthID < minimalDate || monthID > maximalDate,
        [styles['button_month--first']]: handleFirstMarker(monthID),
        [styles['button_month--last']]: handleLastMarker(monthID)
      })

      return (
        <button
          data-testid={`button-${name}`}
          className={buttonClasses}
          key={name}
          onClick={() => handleSelect(monthID)}
          onMouseOver={() => handleHover(monthID)}
          type='button'
        >
          <span className={styles['button_month--marker']} />

          <span className={styles['button_month--name']}>
            {i18nHandler(name)}
          </span>
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
      <div
        data-testid='month-range-picker'
        className={styles['year-container']}
      >
        <Button
          onClick={useCallback(() => setYear(year - 1), [year])}
          size='tiny'
          variant='icon'
        >
          <Icon icon='icon-arrow-left' />
        </Button>

        <span className={styles.year}>{year}</span>

        <Button
          onClick={useCallback(() => setYear(year + 1), [year])}
          size='tiny'
          variant='icon'
        >
          <Icon icon='icon-arrow-right' />
        </Button>
      </div>

      <Spacer space='tiny' />

      <div className={styles['grid-container']}>{renderMonths()}</div>
    </Fragment>
  )
}

MonthRangePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired,
  i18nHandler: PropTypes.func.isRequired
}

export default MonthRangePicker
