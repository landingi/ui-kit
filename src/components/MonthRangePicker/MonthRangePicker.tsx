import Button from '@components/Button'
import { Icon } from '@components/Icon'
import { Spacer } from '@components/Spacer'
import { useStyles } from '@helpers/hooks/useStyles'
import { endOfMonth, startOfMonth } from 'date-fns'
import { FC, Fragment, useCallback, useEffect, useState } from 'react'

import {
  handleRangeMarker,
  monthsArray,
  parseDateToMonthID,
  transformMonthToDate
} from './helpers'
import styles from './MonthRangePicker.module.scss'

export interface MonthRangePickerProps {
  onChange: (range: { startDate: Date; endDate: Date }) => void
  minDate: Date
  maxDate: Date
  i18nHandler: (translation: string) => string
}

export const MonthRangePicker: FC<MonthRangePickerProps> = ({
  onChange,
  minDate,
  maxDate,
  i18nHandler
}) => {
  const minimalDate = parseDateToMonthID(minDate)
  const maximalDate = parseDateToMonthID(maxDate)
  const [isSelecting, setSelecting] = useState(false)
  const [startMonth, setStartMonth] = useState<number>(null)
  const [endMonth, setEndMonth] = useState<number>(null)
  const [year, setYear] = useState(2021)
  const [confirmedEndMonth, setConfirmedEndMonth] = useState<number>(null)

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

  const handleSelect = (monthID: number) => {
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

  const handleHover = (monthID: number) => {
    if (isSelecting) {
      setEndMonth(monthID)
    }
  }

  const constructMonthID = (monthIndex: string) =>
    Number(`${year}${monthIndex}`)

  const handleFirstMarker = (monthID: number) => {
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

  const handleLastMarker = (monthID: number) => {
    const currentEndMonth = confirmedEndMonth || endMonth

    return currentEndMonth < startMonth
      ? startMonth === monthID
      : currentEndMonth === monthID
  }

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
