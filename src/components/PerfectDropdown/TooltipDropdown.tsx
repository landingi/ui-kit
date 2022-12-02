import { Tooltip } from '@components/Tooltip'
import { FC, ReactNode } from 'react'

import { PerfectDropdown } from './PerfectDropdown'

interface TooltipDropdownProps {
  hasArrow?: boolean
  arrowType?: 'caret' | 'dots'
  size?:
    | 'mini'
    | 'small'
    | 'medium'
    | 'big'
    | 'large'
    | 'huge'
    | 'extra-huge'
    | 'auto'
    | 'fixed'
  dropdownPlacement?:
    | 'bottom-start'
    | 'bottom-end'
    | 'bottom-center'
    | 'top-start'
    | 'top-center'
    | 'top-end'
  handleOnOpen?: () => void
  alignment?: 'center' | 'spaced' | 'end'
  children: ReactNode
  icon?: string
  label?: string
  hasInput?: boolean
  hasFullInputStyle?: boolean
  asPlaceholder?: boolean
  customTrigger?: FC<{ isOpen: boolean }>
  className?: string | string[]
  offset?: number
  tooltip: string
  tooltipPlacement?: 'top' | 'left' | 'right' | 'bottom'
}

export const TooltipDropdown: FC<TooltipDropdownProps> = ({
  children,
  icon,
  label,
  size = 'medium',
  arrowType = 'caret',
  hasArrow = true,
  dropdownPlacement = 'bottom-end',
  handleOnOpen,
  alignment = 'center',
  hasInput = false,
  hasFullInputStyle = false,
  asPlaceholder = false,
  customTrigger,
  offset = 5,
  tooltip,
  tooltipPlacement = 'bottom',
  className = ''
}) => (
  <Tooltip content={tooltip} placement={tooltipPlacement}>
    <PerfectDropdown
      icon={icon}
      label={label}
      size={size}
      arrowType={arrowType}
      hasArrow={hasArrow}
      dropdownPlacement={dropdownPlacement}
      handleOnOpen={handleOnOpen}
      alignment={alignment}
      hasInput={hasInput}
      hasFullInputStyle={hasFullInputStyle}
      asPlaceholder={asPlaceholder}
      customTrigger={customTrigger}
      offset={offset}
      className={className}
    >
      {children}
    </PerfectDropdown>
  </Tooltip>
)

TooltipDropdown.displayName = 'TooltipDropdown'
