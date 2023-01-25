import { useStyles } from '@helpers/hooks/useStyles'
import { cloneElement, FC, Fragment, ReactNode } from 'react'
import { Arrow, useHover, useLayer } from 'react-laag'

import styles from './Tooltip.module.scss'

const isReactText = (children: ReactNode) =>
  ['string', 'number'].includes(typeof children)

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

export const Tooltip: FC<TooltipProps> = ({
  className = '',
  children,
  effect = 'solid',
  content = '',
  disabled = false,
  showOnClick = false,
  placement = 'bottom',
  align = 'left'
}) => {
  const [isOver, hoverProps] = useHover()

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    placement: `${placement}-center`,
    triggerOffset: 8
  })

  let trigger

  if (isReactText(children)) {
    trigger = (
      <span
        className='tooltip-text-wrapper'
        {...(disabled ? {} : { ...triggerProps, ...hoverProps })}
      >
        {children}
      </span>
    )
  } else {
    trigger = cloneElement(
      children as React.ReactElement<any>,
      disabled
        ? {}
        : {
            ...triggerProps,
            ...hoverProps
          }
    )
  }

  const tooltipStyles = useStyles({
    [styles['react-tooltip']]: true,
    [styles[`react-tooltip-${align}`]]: align
  })

  return (
    <Fragment>
      <span className={className}>{trigger}</span>

      {renderLayer(
        isOver && (
          <div className={tooltipStyles} {...layerProps}>
            {content}
            <Arrow {...arrowProps} backgroundColor='#222' size={6} />
          </div>
        )
      )}
    </Fragment>
  )
}
