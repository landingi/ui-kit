import { formatNumeric } from '@helpers/data'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './LimitQuantity.module.scss'

// TODO Limit Quantity css
/**
 * Limit Quantity - stateless presentational component
 * @param {object} props - props
 * @param {number} props.limit - limit to display
 * @param {string} props.quantity - quantity to display
 * @return {object} An object of children element
 */
const LimitQuantity = ({ limit, quantity }) => (
  <div className={styles[`limit-quantity`]}>
    <span>
      {formatNumeric(quantity)}

      <span className={styles[`limit-quantity--limit`]}>
        {limit === -1 ? <span> / &#8734;</span> : ` / ${formatNumeric(limit)}`}
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
