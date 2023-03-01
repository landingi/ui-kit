import { Icon } from '@components/Icon'
import { PerfectDropdownSelect } from '@components/PerfectDropdownSelect'
import Spreader from '@components/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import { getLanguage } from '@helpers/i18n'
import { ChangeEvent, FC, Fragment, useCallback, useState } from 'react'
import TimeInput from 'react-advanced-time-input'
import { Row } from 'simple-flexbox'

import {
  CLOCK_OPTIONS,
  MAX_HOUR_EN,
  MAX_HOUR_PL,
  TIME_FORMAT_EN,
  TIME_FORMAT_PL
} from './constants'
import type { ClockType } from './helpers'
import { convertTimeFrom24to12, isAmOrPm, processTime } from './helpers'
import styles from './TimeSelect.module.scss'

export interface TimeSelectProps {
  value?: string
  onChange: (arg1: string, arg2?: string) => void
  formikKey?: string
  label: string
  disabled?: boolean
  size?: 'small' | 'default'
  isAmPmType?: boolean
}

export const TimeSelect: FC<TimeSelectProps> = ({
  value = '12:00',
  onChange,
  formikKey = null,
  label,
  disabled = false,
  size = 'default',
  isAmPmType = getLanguage !== 'pl'
}) => {
  const timeSelectLabelClasses = useStyles({
    [styles['time-select__label']]: true,
    [styles['time-select__label--disabled']]: disabled
  })

  const timeSelectDropdownClasses = useStyles({
    [styles['time-select__dropdown']]: true,
    [styles[`time-select__dropdown--${size}`]]: size
  })

  const [clockType, setClockType] = useState<ClockType>(
    isAmOrPm(value, isAmPmType)
  )

  /**
   * checks if user want to use formik or not
   */
  const handleTimeChange = useCallback(
    (
      newTime: string | number | null,
      type: string | number | null = clockType
    ) => {
      if (formikKey) {
        onChange(formikKey, processTime(newTime as string, type as ClockType))
      } else {
        onChange(processTime(newTime as string, type as ClockType))
      }
    },
    [formikKey, clockType, onChange]
  )

  const handleTimeInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, newTime: string) => {
      if (disabled) return

      if (formikKey) {
        onChange(formikKey, processTime(newTime, clockType))
      } else {
        onChange(processTime(newTime, clockType))
      }
    },
    [clockType, disabled, formikKey, onChange]
  )

  const handleClockChange = useCallback(
    (type: string | number | null) => {
      handleTimeChange(value, type)
      setClockType(type as ClockType)
    },
    [handleTimeChange, value]
  )

  /**
   * render label with custom time input
   */
  const renderDropdownLabel = useCallback(
    (selectedValue: { value: string }) => (
      <Row className={timeSelectLabelClasses} vertical='center'>
        <Icon icon='icon-time' color='color-1' />

        <TimeInput
          onChange={handleTimeInputChange}
          value={selectedValue?.value}
          maxHours={isAmPmType ? MAX_HOUR_EN : MAX_HOUR_PL}
        />
      </Row>
    ),
    [isAmPmType, handleTimeInputChange, timeSelectLabelClasses]
  )

  return (
    <Row vertical='end'>
      <PerfectDropdownSelect
        className={timeSelectDropdownClasses}
        overflowStyle={{ maxHeight: 180 }}
        alwaysShowLabel
        label={label}
        dropdownLabel={renderDropdownLabel}
        options={isAmPmType ? TIME_FORMAT_EN : TIME_FORMAT_PL}
        value={isAmPmType ? convertTimeFrom24to12(value) : value}
        onChange={handleTimeChange}
        customValue
        isOpenDisabled={disabled}
      />

      {Boolean(isAmPmType) && (
        <Fragment>
          <Spreader spread='small' />

          <PerfectDropdownSelect
            options={CLOCK_OPTIONS}
            value={clockType}
            onChange={handleClockChange}
            className={styles['time-select__clock-type-select']}
            isOpenDisabled={disabled}
            size='auto'
            dropdownPlacement='bottom-start'
          />
        </Fragment>
      )}
    </Row>
  )
}

TimeSelect.displayName = 'TimeSelect'
