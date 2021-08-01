import React from 'react'
import PropTypes from 'prop-types'
import useIsOpen from 'shared/helpers/hooks/useIsOpen'
import Section from './Section'

/**
 * Accordion - stateful presentational component
 * @param {object} props - props
 * @param {object} props.children - content to display
 * @return {object} An object of children element
 */
const Accordion = ({ children }) => {
  const openList = useIsOpen([])

  return (
    Array.isArray(children) &&
    children.map((item, index) => (
      <Section
        handleOnClick={() => openList.set(index)}
        isOpen={openList.value.includes(index)}
        key={index}
        // eslint-disable-next-line react/jsx-no-bind
        label={item.props.label}
      >
        {item.props.children}
      </Section>
    ))
  )
}

/**
 * Display name
 * @type {string}
 */
Accordion.displayName = 'Accordion'

/**
 * The properties.
 * @type {Object}
 */
Accordion.propTypes = {
  /**
   * Content
   */
  children: PropTypes.instanceOf(Object).isRequired
}

export default Accordion
