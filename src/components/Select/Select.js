import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import uuid from 'react-uuid'
import styles from './Select.module.scss'
import Option from './Option'

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
  const selectStyles = useStyles({ [styles.select]: true })

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
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Select.defaultProps = {
  onChange: () => null,
  value: undefined
}

export default Select
