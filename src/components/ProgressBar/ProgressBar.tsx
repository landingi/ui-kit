import ColorNumber from '@components/ColorNumber'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, Fragment } from 'react'

import styles from './ProgressBar.module.scss'

export interface ProgressBarProps {
  size?: 'small' | 'medium'
  variant: 'success' | 'warning' | 'alert' | 'progress' | 'brand'
  quantity: number
  limit?: number
  border?: 'white' | 'grey'
  i18n?: {
    limitAlert: string
  }
  showValue?: boolean
  valueSize?: 10 | 12 | 16 | 18 | 32 | 44 | 62
  withoutAnimation?: boolean
}

export const ProgressBar: FC<ProgressBarProps> = ({
  size = 'medium',
  variant,
  limit = 100,
  quantity,
  border,
  i18n,
  showValue = false,
  valueSize = 32,
  withoutAnimation = false
}) => {
  const containerStyles = useStyles({
    [styles.container]: true,
    [styles[`container__${size}`]]: true,
    [styles['container--bordered']]: border
  })

  const backgroundStyles = useStyles({
    [styles.bar]: true,
    [styles[`bar__${size}`]]: true,
    [styles.bar__background]: true,
    [styles[`bar__variant--${variant}`]]: true,
    [styles[`bar__border--${border}`]]: border
  })

  const fulfillmentStyles = useStyles({
    [styles.bar]: true,
    [styles[`bar__${size}`]]: true,
    [styles.bar__fulfillment]: true,
    [styles[`bar__variant--${variant}`]]: true,
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
        <span data-testid='limit-alert' className={styles['limit-alert']}>
          {i18n.limitAlert}
        </span>
      )}

      {showValue && (
        <span className={styles['max-result']}>
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
