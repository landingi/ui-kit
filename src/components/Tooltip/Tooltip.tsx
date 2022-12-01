import { useStyles } from '@helpers/hooks/useStyles'
import { FC, Fragment, ReactNode } from 'react'
import ReactTooltip from 'react-tooltip'
import { v4 as uuidv4 } from 'uuid'

import styles from './Tooltip.module.scss'

export interface TooltipProps {
  className?: string
  children: ReactNode
  effect?: 'solid' | 'float'
  content?: ReactNode
  disabled?: boolean
  showOnClick?: boolean
  placement?: 'top' | 'left' | 'right' | 'bottom'
  align?: 'center' | 'left' | 'right'
}

const Tooltip: FC<TooltipProps> = ({
  className = '',
  children,
  effect = 'solid',
  content = '',
  disabled = false,
  showOnClick = false,
  placement = 'bottom',
  align = 'left'
}) => {
  const tooltipUUID = uuidv4()

  const showOnClickProps = showOnClick
    ? {
        delayHide: 1000,
        event: 'click',
        afterShow: () => ReactTooltip.hide()
      }
    : {}

  const tooltipStyles = useStyles({
    [styles['react-tooltip']]: true,
    [styles[`react-tooltip-${align}`]]: align
  })

  return (
    <Fragment>
      <span className={className} data-tip data-for={tooltipUUID}>
        {children}
      </span>

      <ReactTooltip
        className={tooltipStyles}
        effect={effect}
        id={tooltipUUID}
        disable={disabled}
        isCapture
        place={placement}
        {...showOnClickProps}
      >
        {content}
      </ReactTooltip>
    </Fragment>
  )
}

export default Tooltip
