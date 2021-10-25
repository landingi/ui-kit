import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import { legendShape } from '@shapes'
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
const Legend = ({ data, alignment }) => (
  <div className={cssClass('container', `container--${alignment}`)}>
    {data.map((item, index) => (
      <span
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        className={cssClass('legend', `legend--${item.variant}`)}
      >
        <ColorLine variant={item.variant} alignment='horizontal' />
        {item.range}
      </span>
    ))}
  </div>
)

Legend.displayName = 'Legend'

Legend.propTypes = {
  alignment: PropTypes.oneOf(['vertical', 'horizontal']),
  data: PropTypes.arrayOf(legendShape).isRequired
}

Legend.defaultProps = {
  alignment: 'vertical'
}

export default Legend
