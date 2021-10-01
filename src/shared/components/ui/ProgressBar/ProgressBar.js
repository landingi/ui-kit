import { FormattedMessage } from 'react-intl'
import { styles } from '@helpers/css'
import ColorNumber from '@components/ui/ColorNumber'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './ProgressBar.scss'

const cssClass = styles(scss),
  /**
   * Progress Bar - stateless presentational component
   * @param {object} props - props
   * @param {string} props.barSize - bar size, default 'medium'
   * @param {string} props.variant - color variant
   * @param {string} props.quantity - quantity to display
   * @param {number} props.limit - limit to display
   * @param {bool} props.limitExceededInfo - limit exceeded info, default: false
   * @param {bool} props.showColorNumber - should show limit as an ColorNumber, default: false
   * @param {string} props.limitText - limit type or limit exceeded info, default: ''
   * @param {number} props.size - size
   * @return {object} An object of children element
   */
  progressBar = ({
    barSize,
    size,
    limit,
    variant,
    quantity,
    limitExceededInfo,
    showColorNumber,
    limitText
  }) => {
    const fulfillmentWidth = () => {
      if (quantity === 0) {
        return { minWidth: 0 }
      } else if (quantity > limit) {
        return { width: '100%' }
      }
      return { width: `${(quantity / limit) * 100}%` }
    }

    return (
      <div className={cssClass('container')}>
        <span
          className={cssClass(
            'bar',
            `bar__${barSize}`,
            'bar__background',
            `bar--${variant}`
          )}
        />

        <span
          className={cssClass(
            'bar',
            `bar__${barSize}`,
            'bar__fulfillment',
            `bar__fulfillment--${barSize}`,
            `bar--${variant}`
          )}
          style={fulfillmentWidth()}
        />

        {limitExceededInfo && limitText && (
          <span
            className={cssClass('limit-exceeded__info', `padding__${barSize}`)}
          >
            <FormattedMessage id={limitText} />
          </span>
        )}

        {showColorNumber && (
          <span
            className={cssClass('result__color--stats', `padding__${barSize}`)}
          >
            <ColorNumber size={size} variant={variant}>
              {quantity}
            </ColorNumber>
            /{limit}
          </span>
        )}
      </div>
    )
  }

/**
 * Display name
 * @type {string}
 */
progressBar.displayName = 'Progress Bar'

/**
 * The properties.
 * @type {Object}
 */
progressBar.propTypes = {
  /**
   * BarSize
   */
  barSize: PropTypes.string,

  /**
   * Limit
   */
  limit: PropTypes.number.isRequired,

  /**
   * LimitExceededInfo
   */
  limitExceededInfo: PropTypes.bool,

  /**
   * LimitText
   */
  limitText: PropTypes.string,

  /**
   * Quantity
   */
  quantity: PropTypes.number.isRequired,

  /**
   * ShowColorNumber
   */
  showColorNumber: PropTypes.bool,

  /**
   * Size
   */
  size: PropTypes.number,

  /**
   * Variant
   */
  variant: PropTypes.oneOf(['success', 'warning', 'alert', 'progress', 'info'])
    .isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
progressBar.defaultProps = {
  barSize: 'medium',
  limit: 100,
  limitExceededInfo: false,
  limitText: '',
  showColorNumber: false,
  size: 32
}

export default progressBar
