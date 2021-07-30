import React, { useState } from 'react'
import uuid from 'react-uuid'
import { emitCloseDropdown } from 'shared/events/dropdown'
import Button from 'shared/components/ui/Button'
import Dropdown from 'shared/components/ui/Dropdown'
import List from 'shared/components/ui/List'
import ListItem from 'shared/components/ui/List/Item'
import { setLocalStorage } from 'shared/helpers/storage'
import PropTypes from 'prop-types'

/**
 * Filter - stateful presentational component
 * @param {object} props - props
 * @param {array} props.values - values to choose
 * @param {function} props.setValue - parent compnent filter setter
 * @param {string | object} props.initialValue - initial value
 * @param {string} props.localStorageKey - local storage key, if filter value should be remebered between sessions
 * @return {object} An object of children element
 */
function Filter({
  values,
  setValue,
  initialValue,
  localStorageKey
}) {
  const findInitialValue = () => {
    const find = values.find(
      ({ value }) => value === initialValue
    )

    return find.label
  }

  const [filterLabel, setLabel] = useState(
    findInitialValue()
  )

  const setFilter = (label, value) => {
    setLabel(label)
    setValue(value)
    localStorageKey &&
      setLocalStorage(localStorageKey, value)
    emitCloseDropdown()
  }

  return (
    <Dropdown label={filterLabel}
size="medium">
      <List>
        {values.map(({ value, label }) => (
          <ListItem key={uuid()}
variant="dropdown">
            <Button
              onClick={() => setFilter(label, value)}
              tag="a"
              // eslint-disable-next-line react/jsx-no-bind
              variant="dropdown"
            >
              {label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Dropdown>
  )
}

/**
 * Display name
 * @type {string}
 */
Filter.displayName = 'Select in dropdown'

/**
 * The properties.
 * @type {Object}
 */
Filter.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Object)
      ]),
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    })
  ).isRequired,
  setValue: PropTypes.func,
  initialValue: PropTypes.string,
  localStorageKey: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
Filter.defaultProps = {
  setValue: () => null,
  initialValue: null,
  localStorageKey: null
}

export default Filter
