import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import { legendShape } from 'shared/shapes'
import scss from './Legend.scss'
import ColorLine from '../ColorLine'

const cssClass = styles(scss)

/**
 * Legend - stateless presentational component
 * @param {object} props - props
 * @param {object[]} props.data - data
 * @param {string} props.alignment - alignment
 * @return {object} An object of children element
 */
const legend = ({ data, alignment }) => (
  <div
    className={cssClass('container', `container--${alignment}`)}>
    {data.map((item, index) => (
      <span
        key={index}
        className={cssClass('legend', `legend--${item.variant}`)}>
        <ColorLine
          variant={item.variant}
          alignment='horizontal' />

        {item.range}
      </span>
    ))}
  </div>
)

/**
 * Display name
 * @type {string}
 */
legend.displayName = 'Legend'

/**
 * The properties.
 * @type {Object}
 */
legend.propTypes = {
  /**
   * Alignment
   */
  alignment: PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * Data
   */
  data: PropTypes.arrayOf(legendShape).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
legend.defaultProps = {
  alignment: 'vertical'
}

export default legend
