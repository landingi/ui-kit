/* eslint-disable react/jsx-no-bind */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'shared/components/ui/Dropdown'
import Button from 'shared/components/ui/Button'
import List from 'shared/components/ui/List'
import ListItem from 'shared/components/ui/List/Item'
import { setOrderStatus } from 'shared/services/api/ecommerce/order'
import { emitCloseDropdown } from 'shared/events/dropdown'
import { FormattedMessage } from 'react-intl'
import { emitTableRefresh } from 'shared/events/table'

/**
 * Change status stateless presentational component
 * @param {object} props - props
 * @param {object} props.selected - selected rows
 * @return {object} An object of children elements
 */
const changeStatus = ({ selected }) => {
  /**
   * Update status
   */
  const handleStatusUpdate = async status => {
    emitCloseDropdown()
    const id = selected.map(
      ({ order_uuid }) => order_uuid.id
    )

    try {
      await setOrderStatus(id, status).then(() =>
        emitTableRefresh()
      )
    } catch {}
  }

  /**
   * Render dropdown with predefined statuses
   */
  const renderStatuses = () => {
    return (
      <List>
        <ListItem variant="dropdown">
          <Button
            onClick={() => handleStatusUpdate('open')}
            tag="a"
          >
            <FormattedMessage id="status.open" />
          </Button>
        </ListItem>

        <ListItem variant="dropdown">
          <Button
            onClick={() => handleStatusUpdate('completed')}
            tag="a"
          >
            <FormattedMessage id="status.completed" />
          </Button>
        </ListItem>

        <ListItem variant="dropdown">
          <Button
            onClick={() => handleStatusUpdate('canceled')}
            tag="a"
          >
            <FormattedMessage id="status.canceled" />
          </Button>
        </ListItem>
      </List>
    )
  }

  return (
    <Dropdown
      icon="circle"
      label={<FormattedMessage id="order.change.status" />}
      size="small"
    >
      {renderStatuses()}
    </Dropdown>
  )
}

/**
 * Display name
 * @type {string}
 */
changeStatus.displayName = 'Change status row'

/**
 * The properties.
 * @type {Object}
 */
changeStatus.propTypes = {
  selected: PropTypes.instanceOf(Object).isRequired
}

export default memo(changeStatus)
