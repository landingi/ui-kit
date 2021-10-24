import { formatNumeric } from '@helpers/data'
import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './LimitQuantity.scss'

const cssClass = styles(scss)

/**
 * Limit Quantity - stateless presentational component
 * @param {object} props - props
 * @param {number} props.limit - limit to display
 * @param {string} props.quantity - quantity to display
 * @return {object} An object of children element
 */
const LimitQuantity = ({ limit, quantity }) => (
  <div className={cssClass('limit-quantity')}>
    <span>
      {formatNumeric(quantity)}

      <span className={cssClass('limit-quantity--limit')}>
        {limit === -1 ? (
          <span> / &#8734;</span>
        ) : (
          ` / ${formatNumeric(limit)}`
        )}
      </span>
    </span>
  </div>
)

LimitQuantity.displayName = 'LimitQuantity'

LimitQuantity.propTypes = {
  limit: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
}

export default LimitQuantity
