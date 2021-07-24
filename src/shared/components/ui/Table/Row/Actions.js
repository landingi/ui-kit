/* eslint-disable react/jsx-no-useless-fragment */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import registerIcons from 'shared/helpers/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'shared/components/ui/Button'
import List from 'shared/components/ui/List'
import ListItem from 'shared/components/ui/List/Item'
import { usePermissions } from 'shared/helpers/hooks/usePermissions'
import { READ_ONLY } from 'shared/constants/permissionTypes'

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
const ActionsRow = ({ deleteRow, detailsRow, userPermissions }) => (
  <List variant="inline">
    <ListItem>
      <Button
onClick={detailsRow}
variant="transparent">
        <FontAwesomeIcon
icon="list-alt"
size="sm" />

        <FormattedMessage id="word.details" />
      </Button>
    </ListItem>

    <Fragment>
      {!usePermissions(userPermissions, READ_ONLY) && (
        <ListItem>
          <Button
onClick={deleteRow}
variant="transparent">
            <FontAwesomeIcon
icon="trash-alt"
size="sm" />

            <FormattedMessage id="word.delete" />
          </Button>
        </ListItem>
      )}
    </Fragment>
  </List>
)
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
  userPermissions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
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
