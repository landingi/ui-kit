import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './ProgressBar.scss'
import ColorNumber from '@components/ui/ColorNumber'

const cssClass = styles(scss)

/**
 * Progress Bar - stateless presentational component
 * @param {object} props - props
 * @param {string} props.quantity - quantity to display
 * @param {number} props.limit - limit to display
 * @param {string} props.variant - variant
 * @param {bool} props.limitExceededInfo - TODO
 * @param {bool} props.showColorNumber - should show limit as an ColoroNumber, deafult: false
 * @param {number} props.size - size
 * @return {object} An object of children element
 */
const progressBar = ({
  size,
  limit,
  variant,
  quantity,
  limitExceededInfo,
  showColorNumber,
  border,
  withoutAnimation
}) => (
  <Fragment>
    <div className={cssClass('container', border && 'container--bordered')}>
      <span
        className={cssClass(
          'bar',
          'bar__background',
          `bar--${variant}`,
          border && `bar__border--${border}`
        )}
      />
      <span
        className={cssClass(
          'bar',
          'bar__fulfillment',
          `bar--${variant}`,
          border && 'bar__fulfillment--bordered',
          withoutAnimation && 'bar__fulfillment--no-animation'
        )}
        style={{ width: `${(quantity / limit) * 100}%` }}
      />
    </div>
    {limitExceededInfo && (
      <span className={cssClass('limit-exceeded__info')}>
        limitExceededInfo
      </span>
    )}

    {showColorNumber && (
      <span className={cssClass('max-result')}>
        <ColorNumber variant={variant} size={size}>
          {quantity}
        </ColorNumber>
        /{limit}
      </span>
    )}
  </Fragment>
)


progressBar.displayName = 'Progress Bar'


progressBar.propTypes = {
  /**
   * Variant
   */
  variant: PropTypes.oneOf(['success', 'warning', 'alert', 'progress', 'brand'])
    .isRequired,
  /**
   * Quantity
   */
  quantity: PropTypes.number.isRequired,
  /**
   * Limit
   */
  limit: PropTypes.number,
  /**
   * Size
   */
  size: PropTypes.number,
  /**
   * Border
   */
  border: PropTypes.oneOf(['white', 'grey']),
  /**
   * Limit exceeded info
   * TODO: add translation or put translation in prop
   */
  limitExceededInfo: PropTypes.bool,
  /**
   * should show color numbers, default: false
   */
  showColorNumber: PropTypes.bool,
  /**
   * block animation
   */
  withoutAnimation: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
progressBar.defaultProps = {
  limit: 100,
  size: 32,
  limitExceededInfo: false,
  showColorNumber: false,
  border: null,
  withoutAnimation: false
}

export default progressBar
