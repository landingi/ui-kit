import { emitCloseDropdown } from '@events/dropdown'
import { setLocalStorage } from '@helpers/storage'
import Button from '@components/Button'
import PerfectDropdown from '@components/PerfectDropdown'
import List from '@components/List'
import ListItem from '@components/List/Item'
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
 * @param {string} props.customLabel - customLabel custom label component
 * @param {string} size - size
 * @return {object} An object of children element
 */
const Filter = ({
  values,
  setValue,
  initialValue,
  localStorageKey,
  customLabel,
  ['data-testid']: dataTestId,
  dropdownPlacement,
  size
}) => {
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

  const dropdownLabel = customLabel ? customLabel(filterLabel) : filterLabel

  return (
    <PerfectDropdown
      label={dropdownLabel}
      size={size}
      data-testid={dataTestId}
      dropdownPlacement={dropdownPlacement}
    >
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
    </PerfectDropdown>
  )
}

Filter.displayName = 'SelectFilter'

Filter.propTypes = {
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  ).isRequired,
  customLabel: PropTypes.func,
  ['data-testid']: PropTypes.string,
  dropdownPlacement: PropTypes.string,
  size: PropTypes.oneOf([
    'mini',
    'small',
    'medium',
    'big',
    'large',
    'huge',
    'extra-huge',
    'auto',
    'fixed'
  ])
}

Filter.defaultProps = {
  initialValue: null,
  localStorageKey: null,
  setValue: () => null,
  customLabel: null,
  ['data-testid']: 'filter-component',
  dropdownPlacement: 'right',
  size: 'medium'
}

export default Filter
