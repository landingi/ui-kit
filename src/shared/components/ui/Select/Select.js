import Option from './Option'
import PropTypes from 'prop-types'
import React from 'react'
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
select.defaultProps = {
  onChange: () => null,
  value: undefined
}

export default select
