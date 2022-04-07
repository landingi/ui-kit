import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './ProgressBar.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'
import ColorNumber from '@components/ui/ColorNumber'

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
}) => {
  const elementClassesContainer = useStyles({
    [styles['progress-bar__container']]: true,
    [styles['progress-bar__container--bordered']]: border
  })

  const elementClassesBackground = useStyles({
    [styles[`progress-bar--${variant}`]]: variant,
    [styles['progress-bar__background']]: true,
    [styles[`progress-bar__border--${border}`]]: border
  })

  const elementClassesFulfillment = useStyles({
    [styles[`progress-bar--${variant}`]]: variant,
    [styles['progress-bar__fulfillment']]: true,
    [styles['progress-bar__fulfillment--bordered']]: border,
    [styles['progress-bar__fulfillment--without-animation']]: withoutAnimation
  })

  return (
    <Fragment>
      <div className={elementClassesContainer}>
        <span data-testid='background' className={elementClassesBackground} />

        <span
          data-testid='fulfillment'
          className={elementClassesFulfillment}
          style={{ width: `${(quantity / limit) * 100}%` }}
        />
      </div>

      {limitExceededInfo && (
        <span className={styles['limit-exceeded-info']}>limitExceededInfo</span>
      )}

      {showColorNumber && (
        <span data-testid='color-number' className={styles['max-result']}>
          <ColorNumber variant={variant} size={size}>
            {quantity}
          </ColorNumber>
          /{limit}
        </span>
      )}
    </Fragment>
  )
}

ProgressBar.displayName = 'ProgressBar'

ProgressBar.propTypes = {
  variant: PropTypes.oneOf(['success', 'warning', 'alert', 'progress', 'brand'])
    .isRequired,
  quantity: PropTypes.number.isRequired,
  limit: PropTypes.number,
  size: PropTypes.oneOf([10, 12, 16, 18, 32, 44, 62]),
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
