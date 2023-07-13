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

export interface LimitBarProps {
  padding?: LimitBarPadding
  limit: number
  quantity: number
  regularLimit?: number
  limitText: string
  tooltip?: string
  tooltipInQuantity?: string
  className?: string
}

export const LimitBar: FC<LimitBarProps> = ({
  padding = 'small',
  limit,
  quantity,
  regularLimit = null,
  limitText,
  tooltip,
  tooltipInQuantity,
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
              <Icon icon='icon-info-circle' size={10} />
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
          <span> / &#8734; </span>
        ) : (
          `/${formatNumeric(limit)} `
        )}

        {regularLimit ? (
          <span className={styles['regular-limit']}>
            ({formatNumberWithSpaces(regularLimit)})
          </span>
        ) : null}

        {tooltipInQuantity ? (
          <Fragment>
            <Spreader spread='mini' />

            <Tooltip content={tooltipInQuantity}>
              <Icon icon='icon-info-circle' size={10} />
            </Tooltip>
          </Fragment>
        ) : null}
      </span>
    </div>
  )
}
