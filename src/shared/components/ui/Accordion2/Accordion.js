import { styles } from '@helpers/css'
import AccordionItem from './Item/AccordionItem'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Accordion.scss'
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
function Accordion({ className, data, hasNumber }) {
  return (
    <div className={cssClass(className)}>
      {data.map((item, index) => {
        const { title, content } = item

        return (
          <AccordionItem
            content={content}
            key={uuid()}
            number={hasNumber ? index + 1 : null}
            title={title}
          />
        )
      })}
    </div>
  )
}

Accordion.displayName = 'Accordion'

Accordion.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      title: PropTypes.node.isRequired
    })
  ).isRequired,
  hasNumber: PropTypes.bool
}

Accordion.defaultProps = {
  className: 'accordion',
  hasNumber: false
}

export default Accordion
