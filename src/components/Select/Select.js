import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'
import uuid from 'react-uuid'

import Option from './Option'
import styles from './Select.module.scss'

/**
 * Select - stateless presentational component
 * @param {object} props - props
 * @param {string|number} props.value - value
 * @param {array} props.data - data
 * @param {name} props.name - name
 * @param {function} props.onChange - on change handler
 * @return {object} An object of children element
 */
const Select = ({ value, data, name, onChange, 'data-testid': dataTestId }) => {
  const selectStyles = useStyles({ [styles.select]: true })

  return (
    <select
      className={selectStyles}
      name={name}
      onChange={onChange}
      value={value}
      data-testid={dataTestId}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  'data-testid': PropTypes.string
}

Select.defaultProps = {
  onChange: () => null,
  'data-testid': 'default-select',
  value: undefined
}

export default Select
