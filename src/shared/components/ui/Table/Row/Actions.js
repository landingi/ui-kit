/* eslint-disable react/jsx-no-useless-fragment */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import registerIcons from '@helpers/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@components/ui/Button'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'
import { usePermissions } from '@helpers/hooks/usePermissions'
import { READ_ONLY } from '@constants/permissionTypes'

/*
 * Import fontawesome icons
 */
registerIcons()

/**
 * Row action items - stateless presentational component
 * @param {object} props - props
 * @param {function} props.deleteRow - pass list of id to handle `delete`
 * @param {function} props.detailsRow - pass list of id to handle `mark as read`
 * @param {object} props.userPermissions -  list of permissions
 * @return {object} An object of children element
 */
function ActionsRow({
  deleteRow,
  detailsRow,
  userPermissions
}) {
  return (
    <List variant="inline">
      <ListItem>
        <Button onClick={detailsRow}
variant="transparent">
          <FontAwesomeIcon icon="list-alt"
size="sm" />

          <FormattedMessage id="word.details" />
        </Button>
      </ListItem>

      <>
        {!usePermissions(userPermissions, READ_ONLY) && (
          <ListItem>
            <Button
              onClick={deleteRow}
              variant="transparent"
            >
              <FontAwesomeIcon icon="trash-alt"
size="sm" />

              <FormattedMessage id="word.delete" />
            </Button>
          </ListItem>
        )}
      </>
    </List>
  )
}
/**
 * Display name
 * @type {string}
 */
ActionsRow.displayName = 'ActionsRow'

/**
 * The properties.
 * @type {Object}
 */
ActionsRow.propTypes = {
  /**
   * Handle read
   */
  deleteRow: PropTypes.func,
  /**
   * Handle delete
   */
  detailsRow: PropTypes.func,
  /**
   * userPermissions
   */
  userPermissions: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
ActionsRow.defaultProps = {
  deleteRow: () => null,
  detailsRow: () => null
}

export default ActionsRow
