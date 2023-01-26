import { useStyles } from '@helpers/hooks/useStyles'
import { FC, Fragment, ReactNode, useState } from 'react'
import { Arrow, useHover, useLayer } from 'react-laag'

import styles from './Tooltip.module.scss'

export interface TooltipProps {
  className?: string
  children: ReactNode
  content?: ReactNode
  disabled?: boolean
  showOnClick?: boolean
  placement?: 'top' | 'left' | 'right' | 'bottom'
  align?: 'center' | 'left' | 'right'
}

export const Tooltip: FC<TooltipProps> = ({
  className = '',
  children,
  content = '',
  disabled = false,
  showOnClick = false,
  placement = 'bottom',
  align = 'left'
}) => {
  const [isOver, hoverProps] = useHover() // for hover
  const [isOpenOnClick, setOpenOnClick] = useState(false) // for click

  const isOpen = showOnClick ? isOpenOnClick : isOver

  const close = () => {
    setOpenOnClick(false)
  }

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen,
    placement: `${placement}-center`,
    triggerOffset: 8,
    onOutsideClick: close
  })

  const tooltipStyles = useStyles({
    [styles['react-tooltip']]: true,
    [styles[`react-tooltip-${align}`]]: align
  })

  const stateProps = showOnClick
    ? { onClick: () => setOpenOnClick(prev => !prev) }
    : hoverProps

  return (
    <Fragment>
      {disabled && children}

      {!disabled && (
        <span className={className} {...triggerProps} {...stateProps}>
          {children}
        </span>
      )}

      {renderLayer(
        isOpen && (
          <div className={tooltipStyles} {...layerProps}>
            {content}
            <Arrow {...arrowProps} backgroundColor='#222' size={6} />
          </div>
        )
      )}
    </Fragment>
  )
}
