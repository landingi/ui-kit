import React, { Fragment, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'simple-flexbox'
import TimeInput from 'react-advanced-time-input'
import DropdownSelect from '@components/DropdownSelect'
import Spreader from '@components/Spreader'
import Icon from '@components/Icon'
import {
  TIME_FORMAT_EN,
  TIME_FORMAT_PL,
  CLOCK_OPTIONS,
  MAX_HOUR_EN,
  MAX_HOUR_PL
} from './constants'
import { isAmOrPm, processTime, convertTimeFrom24to12 } from './helpers'
import { useStyles } from '@helpers/hooks/useStyles'
import { getLanguage } from '@helpers/i18n'
import styles from './TimeSelect.module.scss'

//TODO TimeSelect css
/**
 * TimeSelect - stateless component for selecting time
 * @param {object} props - props
 * @param {object} props.inModalName - class name of modal within time select gonna be render
 * @param {string} props.value - current selected time
 * @param {function} props.onChange - function to change time
 * @param {string} props.formikKey - name on formik 'nested' keys
 * @param {string} props.label - label
 * @param {bool} props.disabled - when it's true, time can't be select, default: false
 * @return {object} An object of children element
 */
const TimeSelect = ({
  inModalName,
  value,
  onChange,
  formikKey,
  label,
  disabled
}) => {
  const isAmPmType = getLanguage !== 'pl'

  const timeSelectLabelClasses = useStyles({
    [styles['time-select__label']]: true,
    [styles['time-select__label--disabled']]: disabled
  })

  const timeSelectDropdownClasses = useStyles({
    [styles['time-select__dropdown']]: true
  })

  const [clockType, setClockType] = useState(isAmOrPm(value, isAmPmType))

  /**
   * checks if user want to use formik or not
   */
  const handleTimeChange = useCallback(
    (newTime, type = clockType) => {
      if (formikKey) {
        onChange(formikKey, processTime(newTime, type))
      } else {
        onChange(processTime(newTime, type))
      }
    },
    [formikKey, clockType]
  )

  const handleTimeInputChange = (event, newTime) => {
    if (disabled) return

    if (formikKey) {
      onChange(formikKey, processTime(newTime, clockType))
    } else {
      onChange(processTime(newTime, clockType))
    }
  }

  const handleClockChange = useCallback(type => {
    handleTimeChange(value, type)
    setClockType(type)
  })

  /**
   * render label with custom time input
   */
  const renderDropdownLabel = useCallback(
    selectedValue => (
      <Row className={timeSelectLabelClasses} vertical='center'>
        <Icon icon='icon-time' />
        <TimeInput
          onChange={handleTimeInputChange}
          value={selectedValue?.value}
          maxHours={isAmPmType ? MAX_HOUR_EN : MAX_HOUR_PL}
        />
      </Row>
    ),
    [disabled, value, isAmPmType]
  )

  return (
    <Row vertical='end'>
      <DropdownSelect
        className={timeSelectDropdownClasses}
        overflowStyle={{ maxHeight: 180 }}
        inModalName={inModalName}
        alwaysShowLabel
        label={label}
        dropdownLabel={renderDropdownLabel}
        options={isAmPmType ? TIME_FORMAT_EN : TIME_FORMAT_PL}
        value={isAmPmType ? convertTimeFrom24to12(value) : value}
        onChange={handleTimeChange}
        customValue
        isOpenDisabled={disabled}
      />

      {isAmPmType ? (
        <Fragment>
          <Spreader spread='small' />

          <DropdownSelect
            inModalName={inModalName}
            options={CLOCK_OPTIONS}
            value={clockType}
            onChange={handleClockChange}
            className={styles['time-select__clock-type-select']}
            isOpenDisabled={disabled}
          />
        </Fragment>
      ) : null}
    </Row>
  )
}

TimeSelect.displayName = 'TimeSelect'

TimeSelect.propTypes = {
  inModalName: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  formikKey: PropTypes.string,
  disabled: PropTypes.bool
}

TimeSelect.defaultProps = {
  inModalName: '',
  value: '12:00',
  formikKey: null,
  disabled: false
}

export default TimeSelect
