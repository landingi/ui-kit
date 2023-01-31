import { Tooltip } from '@components/Tooltip'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './OverflowTooltip.module.scss'

export interface OverflowTooltipProps {
  content: string
  placement?: 'top' | 'left' | 'right' | 'bottom'
  length?: number
  children?: ReactNode
  className?: string | string[]
}

export const OverflowTooltip: FC<OverflowTooltipProps> = ({
  content,
  placement = 'right',
  length = 20,
  children = null,
  className = ''
}) => {
  const elementClasses = useStyles(
    {
      [styles['overflow-tooltip']]: true
    },
    className
  )

  if (content?.length > length) {
    if (children) {
      return (
        <div data-testid='overflow-tooltip' className={elementClasses}>
          <div>{`${content.slice(0, length).trim()}...`}</div>

          <Tooltip content={content} placement={placement}>
            {children}
          </Tooltip>
        </div>
      )
    }

    if (!children) {
      return (
        <div data-testid='overflow-tooltip' className={elementClasses}>
          <Tooltip content={content} placement={placement}>
            <div>{`${content.slice(0, length).trim()}...`}</div>
          </Tooltip>
        </div>
      )
    }
  }

  return <div>{content}</div>
}

OverflowTooltip.displayName = 'OverflowTooltip'
