import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './LimitQuantity.scss'
import { formatNumeric } from 'shared/helpers/data'

const cssClass = styles(scss)

/**
 * Limit Quantity - stateless presentational component
 * @param {object} props - props
 * @param {number} props.limit - limit to display
 * @param {string} props.quantity - quantity to display
 * @return {object} An object of children element
 */
const limitQuantity = ({ limit, quantity }) => (
  <div className={cssClass('limit-quantity')}>
    <span>
      {formatNumeric(quantity)}

      <span className={cssClass('limit-quantity--limit')}>
        {limit === -1 ? <span> / &#8734;</span> : ` / ${formatNumeric(limit)}`}
      </span>
    </span>
  </div>
)

/**
 * Display name
 * @type {string}
 */
limitQuantity.displayName = 'Limit Quantity'

/**
 * The properties.
 * @type {Object}
 */
limitQuantity.propTypes = {
  /**
   * Quantity
   */
  limit: PropTypes.number.isRequired,
  /**
   * Quantity
   */
  quantity: PropTypes.number.isRequired
}

export default limitQuantity
