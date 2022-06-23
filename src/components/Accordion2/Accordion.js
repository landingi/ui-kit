import React, { memo } from 'react'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import AccordionItem from './Item/AccordionItem'

/**
 * Accordion - stateless presentational component
 * @param {object} props - props
 * @param {array} props.data - accordion content
 * @param {string} props.padding - accordion padding
 * @param {array} props.isBox - section with background & shadow
 * @return {object} An object of children element
 */
const Accordion = ({ data, padding, isBox }) => (
  <div>
    {data.map(item => {
      const { title, description, content } = item

      return (
        <AccordionItem
          key={uuid()}
          title={title}
          description={description}
          content={content}
          padding={padding}
          isBox={isBox}
        />
      )
    })}
  </div>
)

Accordion.displayName = 'Accordion'

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  padding: PropTypes.oneOf(['none', 'small', 'medium']),
  isBox: PropTypes.bool,
  withoutPadding: PropTypes.bool
}

Accordion.defaultProps = {
  padding: 'medium',
  isBox: false,
  withoutPadding: false
}

export default memo(Accordion)
