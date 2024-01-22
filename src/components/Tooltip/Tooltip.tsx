import { useStyles } from '@helpers/hooks/useStyles'
import {
  FC,
  Fragment,
  MouseEvent,
  ReactElement,
  ReactNode,
  useRef,
  useState
} from 'react'
import { Arrow, mergeRefs, useHover, useLayer } from 'react-laag'

import styles from './Tooltip.module.scss'

export interface TooltipProps {
  className?: string
  tooltipClassName?: string
  children: ReactNode
  content?: ReactNode
  disabled?: boolean
  showOnClick?: boolean
  placement?: 'top' | 'left' | 'right' | 'bottom'
  align?: 'center' | 'left' | 'right'
  'data-testid'?: string | undefined
}

export const Tooltip: FC<TooltipProps> = ({
  className = '',
  tooltipClassName = '',
  children,
  content = '',
  disabled = false,
  showOnClick = false,
  placement = 'bottom',
  align = 'left',
  'data-testid': dataTestId
}) => {
  const triggerRef = useRef<HTMLSpanElement>(null)

  const [isOver, hoverProps] = useHover({
    delayEnter: 200,
    delayLeave: 200
  }) // for hover
  const [isOpenOnClick, setOpenOnClick] = useState(false) // for click

  const isOpen = showOnClick ? isOpenOnClick : isOver

  const close = () => {
    setOpenOnClick(false)
  }

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen,
    placement: `${placement}-center`,
    triggerOffset: 12,
    onOutsideClick: close
  })

  const triggerStyles = useStyles(
    {
      [styles.trigger]: true
    },
    className
  )

  const tooltipStyles = useStyles(
    {
      [styles['react-tooltip']]: true,
      [styles[`react-tooltip-${align}`]]: align
    },
    tooltipClassName
  )

  const stateProps = showOnClick
    ? { onClick: () => setOpenOnClick(prev => !prev) }
    : {
        ...hoverProps,
        onMouseEnter: (e: MouseEvent<HTMLSpanElement>) => {
          if (triggerRef.current?.contains(e.target as Node)) {
            hoverProps.onMouseEnter(e)
          }
        }
      }

  return (
    <Fragment>
      {disabled && children}

      {!disabled && (
        <span
          className={triggerStyles}
          data-testid={dataTestId}
          {...triggerProps}
          {...stateProps}
          ref={mergeRefs(triggerRef, triggerProps.ref)}
        >
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
