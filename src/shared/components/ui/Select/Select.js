import Option from './Option'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Select.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'
import uuid from 'react-uuid'

/**
 * Select - stateless presentational component
 * @param {object} props - props
 * @param {string|number} props.value - value
 * @param {array} props.data - data
 * @param {name} props.name - name
 * @param {function} props.onChange - on change handler
 * @return {object} An object of children element
 */
const Select = ({ value, data, name, onChange }) => {
  const selectStyles = useStyles({ [styles['select']]: true })

  return (
    <select
      className={selectStyles}
      name={name}
      onChange={onChange}
      value={value}
    >
      {data.map(item => (
        <Option key={uuid()} label={item.label} value={item.value} />
      ))}
    </select>
  )
}

Select.displayName = 'Select'

Select.propTypes = {
  /**
   * Data elements
   */
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,

  /**
   * Name
   */
  name: PropTypes.string.isRequired,

  /**
   * Gets called when input changes
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onChange: PropTypes.func,

  /**
   * Value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

/**
 * The default properties.
 * @type {Object}
 */
Select.defaultProps = {
  onChange: () => null,
  value: undefined
}

export default Select
