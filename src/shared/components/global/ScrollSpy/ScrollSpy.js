import React, { useCallback, useRef } from 'react'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'
import List from 'shared/components/ui/List'
import Item from './MainItem'
import { scrollSpyShape } from 'shared/shapes'
import useScrollSpy from 'shared/helpers/hooks/useScrollSpy'

/**
 * ScrollSpy - stateless presentational component
 * @param {object} props - props
 * @param {array} props.elements - array of items
 * @return {object} An object of children element
 */
const scrollSpy = ({ elements }) => {
  const sectionRefs = [useRef(null), useRef(null)]

  // eslint-disable-next-line no-unused-vars
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs
  })

  const handleOnClick = useCallback(id => {
    id.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

  return (
    <List>
      {elements.map(item => (
        <Item
          key={uuid()}
          item={item}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={() => handleOnClick(item.element)}
        />
      ))}
    </List>
  )
}

/**
 * Display name
 * @type {string}
 */
scrollSpy.displayName = 'ScrollSpy'

/**
 * The properties.
 * @type {Object}
 */
scrollSpy.propTypes = {
  /**
   * List of items
   */
  elements: PropTypes.arrayOf(scrollSpyShape).isRequired
}

export default scrollSpy
