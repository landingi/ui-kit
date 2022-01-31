import Option from './Option'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Select.scss'
import uuid from 'react-uuid'

//TODO Select css, test
/**
 * Select - stateless presentational component
 * @param {object} props - props
 * @param {string|number} props.value - value
 * @param {array} props.data - data
 * @param {name} props.name - name
 * @param {function} props.onChange - on change handler
 * @return {object} An object of children element
 */
const Select = ({ value, data, name, onChange }) => (
  <select className={scss.select} name={name} onChange={onChange} value={value}>
    {data.map(item => (
      <Option key={uuid()} label={item.label} value={item.value} />
    ))}
  </select>
)

Select.displayName = 'Select'

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Select.defaultProps = {
  value: undefined,
  onChange: () => null
}

export default Select
