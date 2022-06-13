import React, { memo } from 'react'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import AccordionItem from './Item/AccordionItem'

/**
 * Accordion - stateless presentational component
 * @param {object} props - props
 * @param {array} props.data - accordion content
 * @param {bool} props.hasNumber - has number
 * @param {string} props.size
 * @return {object} An object of children element
 */
const Accordion = ({ data, hasNumber, size }) => (
  <div>
    {data.map((item, index) => {
      const { title, content } = item

      return (
        <AccordionItem
          key={uuid()}
          number={hasNumber ? index + 1 : null}
          title={title}
          size={size}
          content={content}
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
  hasNumber: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium'])
}

Accordion.defaultProps = {
  size: 'medium',
  hasNumber: false
}

export default memo(Accordion)
