import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import scss from './Tooltip.scss'
import uuid from 'react-uuid'
import ReactTooltip from 'react-tooltip'
import { styles } from '@helpers/css'

const cssClass = styles(scss)

/**
 * Tooltip - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.placement - placement, default `bottom`
 * @param {string} props.align - align, default `left`
 * @param {string} props.effect - bahaviour of tooltip
 * @param {string|object} props.content - content
 * @param {bool} props.disabled - disabled
 * @param {bool} props.showOnClick - show on click
 * @return {object} An object of children element
 */
const Tooltip = ({
  className,
  children,
  effect,
  content,
  disabled,
  showOnClick,
  placement,
  align
}) => {
  const tooltipUUID = uuid()

  const showOnClickProps = showOnClick
    ? {
        delayHide: 1000,
        event: 'click',
        afterShow: () => ReactTooltip.hide()
      }
    : {}

  return (
    <Fragment>
      <span className={cssClass(className)} data-tip data-for={tooltipUUID}>
        {children}
      </span>

      <ReactTooltip
        className={cssClass('react-tooltip', `react-tooltip-${align}`)}
        background='#000'
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

Tooltip.propTypes = {
  /**
   * Behaviour of tooltip
   */
  effect: PropTypes.oneOf(['solid', 'float']),
  /**
   * Placement
   */
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  /**
   * Placement
   */
  align: PropTypes.oneOf(['center', 'left', 'right']),
  /**
   * Children element
   */
  children: PropTypes.node.isRequired,
  /**
   * Tooltip content
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
  align: 'left'
}

export default Tooltip
