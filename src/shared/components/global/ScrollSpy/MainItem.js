import { scrollSpyShape } from '@shapes'
import Button from '@components/ui/Button'
import Icon from '@components/ui/Icon'
import Item from './Item'
import ListItem from '@components/ui/List/Item'
import PropTypes from 'prop-types'
import React from 'react'
import uuid from 'react-uuid'

/**
 * MainItem - stateless menu items presentational component
 * @param {object} props - props
 * @param {array} props.item - array of items
 * @param {variant} props.variant - variant
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */

const MainItem = ({ item, onClick }) => {
  const { title, icon, children } = item

  return (
    <ListItem variant='menu'>
      <Button onClick={onClick}>
        <Icon icon={icon} />

        <span>{title}</span>
      </Button>

      <div>
        {children && children.map(item => <Item item={item} key={uuid()} />)}
      </div>
    </ListItem>
  )
}

MainItem.displayName = 'MainItem'

MainItem.propTypes = {
  item: scrollSpyShape.isRequired,
  onClick: PropTypes.func
}

MainItem.defaultProps = {
  onClick: () => null
}

export default MainItem
