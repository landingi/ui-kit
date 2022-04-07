import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './ProgressBar.scss'
import ColorNumber from '@components/ui/ColorNumber'

const cssClass = styles(scss)

//TODO ProgressBar css, props naming ex. withoutAnimation, limitExceededInfo, showColorNumber
/**
 * Progress Bar - stateless presentational component
 * @param {object} props - props
 * @param {number} props.size
 * @param {number} props.limit - limit to display
 * @param {string} props.variant - variant
 * @param {string} props.quantity - quantity to display
 * @param {bool} props.limitExceededInfo - TODO add translation
 * @param {bool} props.showColorNumber - should show limit as an ColoroNumber, deafult: false
 * @param {string} props.border
 * @param {number} props.withoutAnimation
 * @return {object} An object of children element
 */
const ProgressBar = ({
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
        data-testid='background'
        className={cssClass(
          'bar',
          'bar__background',
          `bar--${variant}`,
          border && `bar__border--${border}`
        )}
      />
      <span
        data-testid='fulfillment'
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
      <span data-testid='color-number' className={cssClass('max-result')}>
        <ColorNumber variant={variant} size={size}>
          {quantity}
        </ColorNumber>
        /{limit}
      </span>
    )}
  </Fragment>
)

ProgressBar.displayName = 'ProgressBar'

ProgressBar.propTypes = {
  variant: PropTypes.oneOf(['success', 'warning', 'alert', 'progress', 'brand'])
    .isRequired,
  quantity: PropTypes.number.isRequired,
  limit: PropTypes.number,
  size: PropTypes.number,
  border: PropTypes.oneOf(['white', 'grey']),
  //TODO: add translation or put translation in prop
  limitExceededInfo: PropTypes.bool,
  showColorNumber: PropTypes.bool,
  withoutAnimation: PropTypes.bool
}

ProgressBar.defaultProps = {
  limit: 100,
  size: 32,
  limitExceededInfo: false,
  showColorNumber: false,
  border: null,
  withoutAnimation: false
}

export default ProgressBar
