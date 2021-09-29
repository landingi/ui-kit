import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './LimitSmall.scss'
import { FormattedMessage } from 'react-intl'
import { formatNumeric } from '@helpers/data'

const cssClass = styles(scss),
  /**
   * Limit Small - stateless presentational component
   * @param {object} props - props
   * @param {string} props.padding - top padding size, default 'none'
   * @param {number} props.limit - limit to display
   * @param {string} props.quantity - quantity to display
   * @param {string} props.limitText - limit type info
   * @return {object} An object of children element
   */
  limitSmall = ({
    padding,
    limit,
    quantity,
    limitText
  }) => {
    return (
      <div
        className={cssClass(
          'result__dropdown',
          `padding__${padding}`
        )}
      >
        <span>
          <FormattedMessage id={limitText} />
        </span>

        <span>
          <b>{formatNumeric(quantity)}</b>

          {limit === -1 ? (
            <span> / &#8734;</span>
          ) : (
            ` / ${formatNumeric(limit)}`
          )}
        </span>
      </div>
    )
  }

/**
 * Display name
 * @type {string}
 */
limitSmall.displayName = 'Limit Small'

/**
 * The properties.
 * @type {Object}
 */
limitSmall.propTypes = {
  /**
   * Top padding
   */
  padding: PropTypes.string,
  /**
   * Quantity
   */
  limit: PropTypes.number.isRequired,
  /**
   * Quantity
   */
  quantity: PropTypes.number.isRequired,
  /**
   * LimitText
   */
  limitText: PropTypes.string.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
limitSmall.defaultProps = {
  padding: 'none'
}

export default limitSmall
