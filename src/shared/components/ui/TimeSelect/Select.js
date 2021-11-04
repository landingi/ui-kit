import React, { Fragment, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row } from 'simple-flexbox'
import TimeInput from 'react-advanced-time-input'
import DropdownSelect from '@components/ui/DropdownSelect'
import { styles } from '@helpers/css'
import { getLanguage } from '@helpers/i18n'
import Spreader from '@components/ui/Spreader'
import {
  TIME_FORMAT_EN,
  TIME_FORMAT_PL,
  CLOCK_OPTIONS,
  MAX_HOUR_EN,
  MAX_HOUR_PL
} from './constants'
import { isAmOrPm, processTime, convertTimeFrom24to12 } from './helpers'
import scss from './Select.scss'

const cssClass = styles(scss)

/**
 * Time Select - stateless component for selecting time
 * @param {object} props - props
 * @param {string} props.value - current selected time
 * @param {function} props.onChange - funct to change time
 * @param {string} props.formikKey - name on formik 'nested' keys
 * @param {string} props.label - label
 * @param {bool} props.disabled - when it's true, time can't be select, default: false
 * @return {object} An object of children element
 */
const TimeSelect = ({ value, onChange, formikKey, label, disabled }) => {
  const isAmPmType = getLanguage !== 'pl'

  const timePickerClasses = cssClass('time-picker', {
    'time-picker--disabled': disabled
  })

  const timeSelectClasses = cssClass('time-select', {
    'time-select--small': isAmPmType
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
      <Row className={cssClass(timePickerClasses)} vertical='center'>
        <FontAwesomeIcon icon='clock' className={cssClass('clock-icon')} />
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
        overflowStyle={{ maxHeight: 180 }}
        inModalName='Counter__Modal'
        alwaysShowLabel
        label={label}
        dropdownLabel={renderDropdownLabel}
        options={isAmPmType ? TIME_FORMAT_EN : TIME_FORMAT_PL}
        value={isAmPmType ? convertTimeFrom24to12(value) : value}
        onChange={handleTimeChange}
        className={timeSelectClasses}
        customValue
        isOpenDisabled={disabled}
      />

      {isAmPmType ? (
        <Fragment>
          <Spreader spread='small' />

          <DropdownSelect
            inModalName='Counter__Modal'
            options={CLOCK_OPTIONS}
            value={clockType}
            onChange={handleClockChange}
            className={cssClass('clock-select')}
            isOpenDisabled={disabled}
          />
        </Fragment>
      ) : null}
    </Row>
  )
}

export default TimeSelect

TimeSelect.displayName = 'Time Select'

TimeSelect.propTypes = {
  /**
   * Value
   * @param {String}
   */
  value: PropTypes.string,
  /**
   * Label
   * @param {String}
   */
  label: PropTypes.string.isRequired,
  /**
   * OnChange
   * @param {Function}
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Formik Key
   * @param {string}
   */
  formikKey: PropTypes.string,
  /**
   * Disabled
   * @param {bool}
   */
  disabled: PropTypes.bool
}

TimeSelect.defaultProps = {
  value: null,
  formikKey: null,
  disabled: false
}
