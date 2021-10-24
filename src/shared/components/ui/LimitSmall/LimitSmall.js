import { formatNumeric } from '@helpers/data'
import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './LimitSmall.scss'

const cssClass = styles(scss)

/**
 * Limit Small - stateless presentational component
 * @param {object} props - props
 * @param {string} props.padding - top padding size, default 'none'
 * @param {number} props.limit - limit to display
 * @param {string} props.quantity - quantity to display
 * @param {string} props.limitText - limit type info
 * @return {object} An object of children element
 */
const LimitSmall = ({ padding, limit, quantity, limitText }) => {
  return (
    <div className={cssClass('result__dropdown', `padding__${padding}`)}>
      <span>
        {limitText}
      </span>

      <span>
        <b>{formatNumeric(quantity)}</b>

        {limit === -1 ? <span> / &#8734;</span> : ` / ${formatNumeric(limit)}`}
      </span>
    </div>
  )
}

LimitSmall.displayName = 'LimitSmall'

LimitSmall.propTypes = {
  limit: PropTypes.number.isRequired,
  limitText: PropTypes.string.isRequired,
  padding: PropTypes.string,
  quantity: PropTypes.number.isRequired
}

LimitSmall.defaultProps = {
  padding: 'none'
}

export default LimitSmall
