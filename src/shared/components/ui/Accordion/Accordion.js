import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import useIsOpen from '@helpers/hooks/useIsOpen'
import AccordionSection from './AccordionSection'
import Spacer from '@components/ui/Spacer'

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
      <Fragment key={index}>
        <AccordionSection
          key={index}
          isOpen={openList.value.includes(index)}
          label={item.props.label}
          arrowLabel={item.props.arrowLabel}
          variant={item.props.variant}
          hasExpand={item.props.hasExpand}
          // eslint-disable-next-line react/jsx-no-bind
          handleOnClick={() => item.props.hasExpand && openList.toggle(index)}
        >
          <Spacer space='tiny' />

          {item.props.children}
        </AccordionSection>

        <Spacer space='tiny' />
      </Fragment>
    ))
  )
}


Accordion.displayName = 'Accordion'

Accordion.propTypes = {
  children: PropTypes.node.isRequired
}

export default Accordion
