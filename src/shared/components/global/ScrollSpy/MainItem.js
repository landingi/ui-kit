import React from 'react'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import ListItem from '@components/ui/List/Item'
import Button from '@components/ui/Button'
import Item from './Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { scrollSpyShape } from '@shapes'

/**
 * MainItem - stateless menu items presentational component
 * @param {object} props - props
 * @param {array} props.item - array of items
 * @param {variant} props.variant - variant
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */

const item = ({ item, onClick }) => {
  const { title, icon, children } = item

  return (
    <ListItem variant="menu">
      <Button onClick={onClick}>
        <FontAwesomeIcon icon={icon}
size="1x" />

        <span>{title}</span>
      </Button>

      <div>
        {children &&
          children.map(item => (
            <Item item={item}
key={uuid()} />
          ))}
      </div>
    </ListItem>
  )
}

/**
 * Display name
 * @type {string}
 */
item.displayName = 'MainItem'

/**
 * The properties.
 * @type {Object}
 */
item.propTypes = {
  /**
   * Menu item
   */
  item: scrollSpyShape.isRequired,
  /**
   * Gets called on click
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
item.defaultProps = {
  onClick: () => null
}

export default item
