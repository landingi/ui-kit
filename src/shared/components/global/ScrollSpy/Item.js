import Button from '@components/ui/Button'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Item - stateless menu items presentational component
 * @param {object} props - props
 * @param {object} props.item - array of items
 * @return {object} An object of children element
 */
const item = ({ item }) => {
  const { title, url } = item

  return (
    <Button href={url} tag='a'>
      <span>{title}</span>
    </Button>
  )
}

item.displayName = 'Item'

item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default item
