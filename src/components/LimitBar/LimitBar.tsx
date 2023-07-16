import { Icon } from '@components/Icon'
import ProgressBar from '@components/ProgressBar'
import Spreader from '@components/Spreader'
import { Tooltip } from '@components/Tooltip'
import { formatNumeric } from '@helpers/data'
import { formatNumberWithSpaces } from '@helpers/formatNumberWithSpaces'
import { getVariant } from '@helpers/getVariant'
import { useStyles } from '@helpers/hooks/useStyles'
import { isUnlimited } from '@helpers/isUnlimited'
import { FC, Fragment } from 'react'

import styles from './LimitBar.module.scss'

type LimitBarPadding = 'none' | 'tiny' | 'small' | 'medium' | 'regular'
export interface CommonLimitBarProps {
  padding?: LimitBarPadding
  limit: number
  quantity: number
  regularLimit?: number
  limitText: string
  tooltip?: string
  tooltipInQuantity?: string
  shouldShowRegularLimit?: boolean
  className?: string
}

type ShowRegulatLimitProps = {
  regulatLimit: number
  tooltipInQuantity: string
  shouldShowRegularLimit: boolean
}

export type LimitBarProps = ShowRegulatLimitProps & CommonLimitBarProps

export const LimitBar: FC<LimitBarProps> = ({
  padding,
  limit,
  quantity,
  regularLimit,
  limitText,
  tooltip,
  tooltipInQuantity,
  shouldShowRegularLimit,
  className
}) => {
  const elementClasses = useStyles(
    {
      [styles['limit-bar']]: true,
      [styles[`padding-${padding}`]]: padding
    },
    className
  )

  return (
    <div className={elementClasses}>
      <span>
        {limitText}

        {tooltip ? (
          <Fragment>
            <Spreader spread='mini' />

            <Tooltip content={tooltip}>
              <Icon icon='icon-info-circle' />
            </Tooltip>
          </Fragment>
        ) : null}
      </span>

      {!isUnlimited(limit) ? (
        <div className={styles.progressbar__wrapper}>
          <ProgressBar
            limit={limit}
            quantity={quantity}
            variant={getVariant(quantity, limit)}
            size='small'
          />
        </div>
      ) : (
        <span className={styles.padding__tiny} />
      )}

      <span>
        <b>{formatNumeric(quantity)}</b>

        {isUnlimited(limit) ? (
          <span> / &#8734;</span>
        ) : (
          `/${formatNumeric(limit)} `
        )}

        {shouldShowRegularLimit && (
          <Fragment>
            {regularLimit ? (
              <span className={styles['regular-limit']}>
                ({formatNumberWithSpaces(regularLimit)})
              </span>
            ) : null}

            {tooltipInQuantity ? (
              <Fragment>
                <Spreader spread='mini' />

                <Tooltip content={tooltipInQuantity}>
                  <Icon icon='icon-info-circle' />
                </Tooltip>
              </Fragment>
            ) : null}
          </Fragment>
        )}
      </span>
    </div>
  )
}
