import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Accordion.scss'
import AccordionItem from './Item/AccordionItem'
import uuid from 'react-uuid'

const cssClass = styles(scss)

/**
 * Accordion - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `accordion`
 * @param {array} props.data - accordion content
 * @param {bool} props.hasNumber - has number, default `false`
 * @return {object} An object of children element
 */
const Accordion = ({ className, data, hasNumber, size }) => (
  <div className={cssClass(className)}>
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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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
  className: 'accordion',
  hasNumber: false,
  size: 'medium'
}

export default memo(Accordion)
