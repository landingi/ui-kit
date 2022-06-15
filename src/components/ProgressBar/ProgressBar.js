import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styles from './ProgressBar.module.scss'
import ColorNumber from '@components/ColorNumber'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Progress Bar - stateless presentational component
 * @param {object} props - props
 * @param {string} props.size - bar size
 * @param {string} props.variant - color variant
 * @param {string} props.quantity - quantity to display
 * @param {number} props.limit - limit to display
 * @param {string} props.border - with border
 * @param {object} props.i18n - props with translated string
 * @param {bool} props.showValue - show value (quantity/limit)
 * @param {number} props.valueSize - value font size
 * @param {number} props.withoutAnimation - without animation
 * @return {object} An object of children element
 */
const ProgressBar = ({
  size,
  variant,
  limit,
  quantity,
  border,
  i18n,
  showValue,
  valueSize,
  withoutAnimation
}) => {
  const containerStyles = useStyles({
    [styles['container']]: true,
    [styles['container--bordered']]: border
  })

  const backgroundStyles = useStyles({
    [styles['bar']]: true,
    [styles[`bar__${size}`]]: true,
    [styles['bar__background']]: true,
    [styles[`bar--${variant}`]]: true,
    [styles[`bar__border--${border}`]]: border
  })

  const fulfillmentStyles = useStyles({
    [styles['bar']]: true,
    [styles[`bar__${size}`]]: true,
    [styles['bar__fulfillment']]: true,
    [styles[`bar--${variant}`]]: true,
    [styles['bar__fulfillment--bordered']]: border,
    [styles['bar__fulfillment--no-animation']]: withoutAnimation
  })

  return (
    <Fragment>
      <div className={containerStyles}>
        <span data-testid='background' className={backgroundStyles} />
        <span
          data-testid='fulfillment'
          className={fulfillmentStyles}
          style={{
            width: `${quantity > limit ? 100 : (quantity / limit) * 100}%`
          }}
        />
      </div>

      {i18n?.limitAlert && (
        <span data-testid='color-number' className={styles['limit-alert']}>
          {i18n.limitAlert}
        </span>
      )}

      {showValue && (
        <span data-testid='color-number' className={styles['max-result']}>
          <ColorNumber variant={variant} size={valueSize}>
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
  size: PropTypes.oneOf(['small', 'medium']),
  variant: PropTypes.oneOf(['success', 'warning', 'alert', 'progress', 'brand'])
    .isRequired,
  quantity: PropTypes.number.isRequired,
  limit: PropTypes.number,
  border: PropTypes.oneOf(['white', 'grey']),
  i18n: PropTypes.shape({
    limitAlert: PropTypes.string
  }),
  showValue: PropTypes.bool,
  valueSize: PropTypes.number,
  withoutAnimation: PropTypes.bool
}

ProgressBar.defaultProps = {
  size: 'medium',
  limit: 100,
  border: null,
  i18n: {},
  showValue: false,
  valueSize: 32,
  withoutAnimation: false
}

export default ProgressBar
