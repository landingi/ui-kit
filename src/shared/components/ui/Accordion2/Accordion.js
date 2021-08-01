import React from 'react'
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
   * Classname
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Data
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  /**
   * HasNumber
   */
  hasNumber: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
Accordion.defaultProps = {
  className: 'accordion',
  hasNumber: false
}

export default Accordion
