import { formatNumeric } from '@helpers/data'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './LimitSmall.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

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
  const limitSmallStyles = useStyles({
    [styles['result__dropdown']]: true,
    [styles[`padding__${padding}`]]: padding
  })

  return (
    <div className={limitSmallStyles}>
      <span>{limitText}</span>

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
  padding: PropTypes.oneOf(['none', 'small', 'medium']),
  quantity: PropTypes.number.isRequired
}

LimitSmall.defaultProps = {
  padding: 'none'
}

export default LimitSmall
