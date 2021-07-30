import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './ProgressBar.scss'
import ColorNumber from 'shared/components/ui/ColorNumber'
import { FormattedMessage } from 'react-intl'

const cssClass = styles(scss)

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
const progressBar = ({
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
    } else {
      return { width: `${(quantity / limit) * 100}%` }
    }
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
          className={cssClass(
            'limit-exceeded__info',
            `padding__${barSize}`
          )}
        >
          <FormattedMessage id={limitText} />
        </span>
      )}

      {showColorNumber && (
        <span
          className={cssClass(
            'result__color--stats',
            `padding__${barSize}`
          )}
        >
          <ColorNumber variant={variant} size={size}>
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
   * barSize
   */
  barSize: PropTypes.string,
  /**
   * Variant
   */
  variant: PropTypes.oneOf([
    'success',
    'warning',
    'alert',
    'progress',
    'info'
  ]).isRequired,
  /**
   * Quantity
   */
  quantity: PropTypes.number.isRequired,
  /**
   * Limit
   */
  limit: PropTypes.number.isRequired,
  /**
   * limitExceededInfo
   */
  limitExceededInfo: PropTypes.bool,
  /**
   * showColorNumber
   */
  showColorNumber: PropTypes.bool,
  /**
   * limitText
   */
  limitText: PropTypes.string,
  /**
   * Size
   */
  size: PropTypes.number
}

/**
 * The default properties.
 * @type {Object}
 */
progressBar.defaultProps = {
  barSize: 'medium',
  limit: 100,
  size: 32,
  limitExceededInfo: false,
  showColorNumber: false,
  limitText: ''
}

export default progressBar
