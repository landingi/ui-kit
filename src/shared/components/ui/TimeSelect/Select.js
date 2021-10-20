import React, {
  Fragment,
  useCallback,
  useState,
  useRef,
  useEffect
} from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row } from 'simple-flexbox'
import TimePicker from 'react-time-picker'
import DropdownSelect from 'shared/components/ui/DropdownSelect'
import { styles } from 'shared/helpers/css'
import { getLanguage } from 'shared/helpers/i18n'
import Spreader from 'shared/components/ui/Spreader'
import {
  TIME_FORMAT_EN,
  TIME_FORMAT_PL,
  CLOCK_OPTIONS,
  MIN_TIME_EN,
  MAX_TIME_EN,
  MIN_TIME_PL,
  MAX_TIME_PL
} from './constants'
import { isAmOrPm, processTime } from './helpers'
import scss from './Select.scss'

const cssClass = styles(scss)

/**
 * Time Select - stateless component for selecting time
 * @param {object} props - props
 * @param {string} props.value - current selected time
 * @param {function} props.onChange - funct to change time
 * @param {string} props.formikKey - name on formik 'nasted' keys
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

  const timePickerRef = useRef(null)

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

  const handleClockChange = useCallback(type => {
    handleTimeChange(value, type)
    setClockType(type)
  })

  useEffect(() => {
    const { wrapper: timePickerWrapper } = timePickerRef.current

    const preventDeletingValues = event => {
      if (['Backspace', 'Delete'].includes(event.key)) {
        event.preventDefault()
      }
    }

    timePickerWrapper.addEventListener('keydown', preventDeletingValues)

    return () =>
      timePickerWrapper.removeEventListener('keydown', preventDeletingValues)
  }, [])

  /**
   * render label with custom time input
   */
  const renderDropdownLabel = useCallback(
    selectedValue => (
      <Row className={cssClass('label')} vertical='center'>
        <FontAwesomeIcon icon='clock' className={cssClass('clock-icon')} />
        <TimePicker
          ref={timePickerRef}
          format={isAmPmType ? 'hh:mm' : 'HH:mm'}
          className={timePickerClasses}
          clockIcon={null}
          clearIcon={null}
          isOpen={false}
          openClockOnFocus={false}
          onChange={handleTimeChange}
          value={selectedValue?.value}
          disabled={disabled}
          minTime={isAmPmType ? MIN_TIME_EN : MIN_TIME_PL}
          maxTime={isAmPmType ? MAX_TIME_EN : MAX_TIME_PL}
        />
      </Row>
    ),
    [disabled]
  )

  return (
    <Row vertical='end'>
      <DropdownSelect
        overflowStyle={{ maxHeight: 180 }}
        inModalName='Counter__Modal'
        alwaysShowLabel
        label={label}
        dropdownLabel={renderDropdownLabel}
        options={getLanguage === 'pl' ? TIME_FORMAT_PL : TIME_FORMAT_EN}
        value={value}
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

/**
 * Display name
 * @type {string}
 */
TimeSelect.displayName = 'Time Select'

/**
 * The properties.
 * @type {Object}
 */
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
