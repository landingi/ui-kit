import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import scss from './Tooltip.scss'
import { styles } from '@helpers/css'
import uuid from 'react-uuid'

const cssClass = styles(scss)

/**
 * Tooltip - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.placement - placement, default `bottom`
 * @param {string} props.align - align, default `left`
 * @param {string} props.effect - bahaviour of tooltip
 * @param {string} props.size - width
 * @param {string|object} props.content - content
 * @param {bool} props.disabled - disabled
 * @param {bool} props.showOnClick - show on click
 * @return {object} An object of children element
 */
function Tooltip({
  className,
  children,
  effect,
  content,
  disabled,
  showOnClick,
  placement,
  align,
  size
}) {
  const tooltipUUID = uuid(),
    showOnClickProps = showOnClick
      ? {
          delayHide: 1000,
          event: 'click',
          afterShow: () => ReactTooltip.hide()
        }
      : {}

  return (
    <>
      <span
        className={cssClass(className)}
        data-for={tooltipUUID}
        data-tip
      >
        {children}
      </span>

      <ReactTooltip
        background='#000'
        className={cssClass(
          'react-tooltip',
          `react-tooltip-${align}`,
          `react-tooltip--${size}`
        )}
        disable={disabled}
        effect={effect}
        id={tooltipUUID}
        isCapture
        place={placement}
        {...showOnClickProps}
      >
        {content}
      </ReactTooltip>
    </>
  )
}

/**
 * The properties.
 * @type {Object}
 */
Tooltip.propTypes = {
  /**
   * Behaviour of tooltip
   */
  effect: PropTypes.oneOf(['solid', 'float']),
  /**
   * Placement
   */
  placement: PropTypes.oneOf([
    'top',
    'left',
    'right',
    'bottom'
  ]),
  /**
   * Placement
   */
  align: PropTypes.oneOf(['center', 'left', 'right']),
  /**
   * Placement
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  /**
   * Children element
   */
  children: PropTypes.node.isRequired,
  /**
   * Tooltip content
   */
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /**
   * Show tooltip after click, tooltip is hidden after 1 sec
   */
  showOnClick: PropTypes.bool,
  /**
   * Disable toolip
   */
  disabled: PropTypes.bool,
  /**
   * Custom classname
   */
  className: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
Tooltip.defaultProps = {
  effect: 'solid',
  placement: 'bottom',
  content: '',
  showOnClick: false,
  disabled: false,
  className: '',
  align: 'left',
  size: 'medium'
}

export default Tooltip
