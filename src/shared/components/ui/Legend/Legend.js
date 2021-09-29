import { legendShape } from '@shapes'
import { styles } from '@helpers/css'
import ColorLine from '../ColorLine'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Legend.scss'

const cssClass = styles(scss),
  /**
   * Legend - stateless presentational component
   * @param {object} props - props
   * @param {object[]} props.data - data
   * @param {string} props.alignment - alignment
   * @return {object} An object of children element
   */
  legend = ({ data, alignment }) => (
    <div
      className={cssClass(
        'container',
        `container--${alignment}`
      )}
    >
      {data.map((item, index) => (
        <span
          className={cssClass(
            'legend',
            `legend--${item.variant}`
          )}
          key={index}
        >
          <ColorLine
            alignment='horizontal'
            variant={item.variant}
          />

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
