import React from 'react'
import PropTypes from 'prop-types'
import Option from './Option'
import scss from './Select.scss'
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
const select = ({ value, data, name, onChange }) => (
  <select
    className={scss.select}
    name={name}
    onChange={onChange}
    value={value}
  >
    {data.map(item => (
      <Option
        key={uuid()}
        label={item.label}
        value={item.value}
      />
    ))}
  </select>
)

/**
 * Display name
 * @type {string}
 */
select.displayName = 'Select'

/**
 * The properties.
 * @type {Object}
 */
select.propTypes = {
  /**
   * Value
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /**
   * Name
   */
  name: PropTypes.string.isRequired,
  /**
   * Data elements
   */
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  /**
   * Gets called when input changes
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onChange: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
select.defaultProps = {
  value: undefined,
  onChange: () => null
}

export default select
