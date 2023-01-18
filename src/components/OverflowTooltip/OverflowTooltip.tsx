import { Tooltip } from '@components/Tooltip'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import { FC, ReactNode } from 'react'

import styles from './OverflowTooltip.module.scss'

interface OverflowTooltipProps {
  content: string
  placement?: 'top' | 'left' | 'right' | 'bottom'
  length?: number
  children?: ReactNode
  className?: string | string[]
}

/**
 * OverflowTooltip - stateless presentational component
 * @param {string} props.content - content to overflow
 * @param {string} props.placement - tooltip placement
 * @param {number} props.length - max content length to overflow if it is exceeded
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names out of component
 * @return {object} An object of children element
 */
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
    return children ? (
      <div data-testid='overflow-tooltip' className={elementClasses}>
        <div>{`${content.slice(0, length).trim()}...`}</div>

        <Tooltip content={content} placement={placement}>
          {children}
        </Tooltip>
      </div>
    ) : (
      <div data-testid='overflow-tooltip' className={elementClasses}>
        <Tooltip content={content} placement={placement}>
          <div>{`${content.slice(0, length).trim()}...`}</div>
        </Tooltip>
      </div>
    )
  }

  return <div>{content}</div>
}

OverflowTooltip.displayName = 'OverflowTooltip'
