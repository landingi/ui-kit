import { scrollSpyShape } from '@shapes'
import Item from './MainItem'
import List from '@components/ui/List'
import PropTypes from 'prop-types'
import React, { useCallback, useRef } from 'react'
import useScrollSpy from '@helpers/hooks/useScrollSpy'
import uuid from 'react-uuid'

//TODO ScrollSpy css, mdx, test
/**
 * ScrollSpy - stateless presentational component
 * @param {object} props - props
 * @param {array} props.elements - array of items
 * @return {object} An object of children element
 */
const ScrollSpy = ({ elements }) => {
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
          item={item}
          key={uuid()}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={() => handleOnClick(item.element)}
        />
      ))}
    </List>
  )
}

ScrollSpy.displayName = 'ScrollSpy'

ScrollSpy.propTypes = {
  elements: PropTypes.arrayOf(scrollSpyShape).isRequired
}

export default ScrollSpy
