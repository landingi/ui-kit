import { formatNumeric } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './LimitSmall.module.scss'

/**
 * Limit Small - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {string} props.padding - top padding size, default 'none'
 * @param {number} props.limit - limit to display
 * @param {string} props.quantity - quantity to display
 * @param {string} props.limitText - limit type info
 * @return {object} An object of children element
 */
const LimitSmall = ({ className, padding, limit, quantity, limitText }) => {
  const limitSmallStyles = useStyles(
    {
      [styles.result__dropdown]: true,
      [styles[`padding__${padding}`]]: padding
    },
    className
  )

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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  limit: PropTypes.number.isRequired,
  limitText: PropTypes.string.isRequired,
  padding: PropTypes.oneOf(['none', 'tiny', 'small', 'medium']),
  quantity: PropTypes.number.isRequired
}

LimitSmall.defaultProps = {
  className: '',
  padding: 'none'
}

export default LimitSmall
