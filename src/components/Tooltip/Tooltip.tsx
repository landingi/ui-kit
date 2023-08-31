import { useStyles } from '@helpers/hooks/useStyles'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, Fragment, ReactElement, ReactNode, useState } from 'react'
import { Arrow, useHover, useLayer } from 'react-laag'

import styles from './Tooltip.module.scss'

export interface TooltipProps {
  className?: string
  children: ReactElement
  content?: ReactNode
  disabled?: boolean
  showOnClick?: boolean
  placement?: 'top' | 'left' | 'right' | 'bottom'
  align?: 'center' | 'left' | 'right'
  'data-testid'?: string | undefined
}

export const Tooltip: FC<TooltipProps> = ({
  className = '',
  children,
  content = '',
  disabled = false,
  showOnClick = false,
  placement = 'bottom',
  align = 'left',
  'data-testid': dataTestId
}) => {
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
        <span
          className={className}
          data-testid={dataTestId}
          {...triggerProps}
          {...stateProps}
        >
          {children}
        </span>
      )}

      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={tooltipStyles}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              {...layerProps}
            >
              {content}
              <Arrow {...arrowProps} backgroundColor='#222' size={6} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </Fragment>
  )
}
