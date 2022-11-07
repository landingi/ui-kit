import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@components/ui/Tooltip'
import PerfectDropdown from './PerfectDropdown'

const TooltipDropdown = ({
  children,
  icon,
  innerDropdown,
  label,
  size,
  arrowType,
  hasArrow,
  dropdownPlacement,
  handleOnOpen,
  alignment,
  hasInput,
  hasFullInputStyle,
  asPlaceholder,
  customTrigger,
  offset,
  tooltip,
  tooltipPlacement,
  className
}) => (
  <Tooltip content={tooltip} placement={tooltipPlacement}>
    <PerfectDropdown
      icon={icon}
      innerDropdown={innerDropdown}
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

TooltipDropdown.propTypes = {
  hasArrow: PropTypes.bool,
  arrowType: PropTypes.string,
  size: PropTypes.string,
  dropdownPlacement: PropTypes.string,
  handleOnOpen: PropTypes.func,
  alignment: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  innerDropdown: PropTypes.bool,
  label: PropTypes.string,
  hasInput: PropTypes.bool,
  hasFullInputStyle: PropTypes.bool,
  asPlaceholder: PropTypes.bool,
  customTrigger: PropTypes.node,
  className: PropTypes.string,
  offset: PropTypes.number,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string
}

TooltipDropdown.defaultProps = {
  hasArrow: true,
  arrowType: 'caret',
  size: 'medium',
  dropdownPlacement: 'bottom-end',
  handleOnOpen: () => null,
  alignment: 'false',
  icon: null,
  innerDropdown: false,
  label: null,
  hasInput: false,
  hasFullInputStyle: false,
  asPlaceholder: false,
  customTrigger: null,
  className: '',
  offset: 5,
  tooltip: '',
  tooltipPlacement: ''
}

TooltipDropdown.displayName = 'TooltipDropdown'

export default TooltipDropdown
