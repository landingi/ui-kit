import { emitCloseDropdown } from '@events/dropdown'
import { setLocalStorage } from '@helpers/storage'
import Button from '@components/ui/Button'
import Dropdown from '@components/ui/Dropdown'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import uuid from 'react-uuid'

/**
 * Filter - stateful presentational component
 * @param {object} props - props
 * @param {array} props.values - values to choose
 * @param {function} props.setValue - parent component filter setter
 * @param {string | object} props.initialValue - initial value
 * @param {string} props.localStorageKey - local storage key, if filter value should be remebered between sessions
 * @return {object} An object of children element
 */
const Filter = ({ values, setValue, initialValue, localStorageKey }) => {
  const findInitialValue = () => {
    const find = values.find(({ value }) => value === initialValue)

    return find.label
  }

  const [filterLabel, setLabel] = useState(findInitialValue())

  const setFilter = (label, value) => {
    setLabel(label)
    setValue(value)
    localStorageKey && setLocalStorage(localStorageKey, value)
    emitCloseDropdown()
  }

  return (
    <Dropdown label={filterLabel} size='medium'>
      <List>
        {values.map(({ value, label }) => (
          <ListItem key={uuid()} variant='dropdown'>
            <Button
              onClick={() => setFilter(label, value)}
              tag='a'
              variant='dropdown'
            >
              {label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Dropdown>
  )
}

Filter.displayName = 'SelectFilter'

Filter.propTypes = {
  initialValue: PropTypes.string,
  localStorageKey: PropTypes.string,
  setValue: PropTypes.func,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object)
      ]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired
}

Filter.defaultProps = {
  initialValue: null,
  localStorageKey: null,
  setValue: () => null
}

export default Filter
