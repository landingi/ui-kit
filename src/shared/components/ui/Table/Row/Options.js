import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'shared/components/ui/Button'
import List from 'shared/components/ui/List'
import ListItem from 'shared/components/ui/List/Item'
import { styles } from 'shared/helpers/css'
import scss from './Options.scss'
import ChangeStatus from './ChangeStatus'
import { HAS_DELETE, HAS_CHANGE_STATUS } from 'shared/constants/permissionTypes'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Row options - stateless presentational component
 * @param {object} props - props
 * @param {array} props.selected - selected column(s)
 * @param {array} props.options - a list of available options
 * @param {string|array} props.className - list of class names, default: `table__selected-options`
 * @param {string} props.selectedInbox -  selected inbox
 * @return {object} An object of children element
 */
const rowOptions = ({
  selected,
  options,
  className,
  component: { component: Component, props },
  handleDelete
}) => {
  return (
    <div className={cssClass(className)}>
      <List variant='inline'>
        <ListItem>
          <FormattedMessage
            id="word.table.selected"
            values={{
              count: selected.length
            }}
          />
        </ListItem>

        {Component && <Component
          selectedItems={selected}
          {...props} />}

        {options.includes(HAS_CHANGE_STATUS) && (
          <ListItem>
            <ChangeStatus selected={selected} />
          </ListItem>
        )}

        {options.includes(HAS_DELETE) && (
          <ListItem>
            <Button
              onClick={handleDelete}
              variant='transparent'>
              <FontAwesomeIcon
                icon='trash-alt'
                size='sm' />

              <FormattedMessage id='word.delete' />
            </Button>
          </ListItem>
        )}
      </List>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
rowOptions.displayName = 'Table Row Options'

/**
 * The properties.
 * @type {Object}
 */
rowOptions.propTypes = {
  /**
   * A list of selected rows
   */
  selected: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  /**
   * A list of options
   */
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  /**
   * Classname, default `table__selected-options`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Handle read
   */
  handleRead: PropTypes.func,
  /**
   * Handle delete
   */
  handleDelete: PropTypes.func,
  /**
   * Handle mark as spam
   */
  handleMarkAsSpam: PropTypes.func,
  /**
   * Handle unmark as spam
   */
  handleUnmarkAsSpam: PropTypes.func,
  /**
   * selected inbox
   */
  selectedInbox: PropTypes.string,
  component: PropTypes.instanceOf(Object)
}

/**
 * The default properties.
 * @type {Object}
 */
rowOptions.defaultProps = {
  className: 'table__selected-options',
  handleDelete: () => null,
  options: [],
  component: {
    component: null,
    props: null
  }
}

export default memo(rowOptions)
