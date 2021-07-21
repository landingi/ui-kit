/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import Button from 'shared/components/ui/Button'
import Dropdown from 'shared/components/ui/Dropdown'
import List from 'shared/components/ui/List'
import ListItem from 'shared/components/ui/List/Item'
import { emitTableFilterRefresh } from 'shared/events/table'
import { getLocalStorage } from 'shared/helpers/storage'
import { FormattedMessage } from 'react-intl'
import { emitCloseDropdown } from 'shared/events/dropdown'
import { defaultLabels } from 'shared/helpers/data'

/**
 * selectFilter - stateful presentational component
 * @param {object} props - props
 * @param {object} props.table - table
 * @return {object} An object of children element
 */

const selectFilter = table => {
  const { initialState, column } = table
  const { filters } = initialState
  const [labelSelect, setLabel] = useState([])

  const hasItems = useCallback(() => {
    let hasItem = false

    filters.map(({ id }) => {
      if (id === column.id) {
        hasItem = true
      }
    })
    return hasItem
  })

  const handleSetFilter = useCallback((value, label) => {
    emitCloseDropdown()
    emitTableFilterRefresh(value)
    setLabel(label)
  }, [])

  return (
    hasItems() && (
      <Dropdown
        label={<FormattedMessage id={getLocalStorage(column.id) || defaultLabels[column.id]} />}
        size={column.id === 'subaccountInfo' ? 'medium' : 'small'}>
        <List>
          {filters.map(({
            id, value, label
          }) => (id === column.id && (
            <ListItem
              key={uuid()}
              variant='dropdown'>
              <Button
                tag="a"
                variant='dropdown'
                onClick={() => handleSetFilter(value, label)}>
                {label || labelSelect}
              </Button>
            </ListItem>
          )))}
        </List>
      </Dropdown>
    ))
}

/**
 * The properties.
 * @type {Object}
 */
selectFilter.propTypes = {
  /**
   * table
   */
  table: PropTypes.node
}

export default selectFilter
