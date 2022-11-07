import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import ReactTooltip from 'react-tooltip'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Tooltip.module.scss'

// TODO Tooltip css, test, mdx remove <br/>
/**
 * Tooltip - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.placement - placement, default `bottom`
 * @param {string} props.align - align, default `left`
 * @param {string} props.effect - behaviour of tooltip
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

  const showOnClickProps = showOnClick? {
        delayHide: 1000,
        event: 'click',
        afterShow: () => ReactTooltip.hide()
      }: {}

  const tooltipStyles = useStyles({
    [styles['react-tooltip']]: true,
    [styles[`react-tooltip-${align}`]]: align
  })

  return (
    <Fragment>
      <span className={className} data-tip data-for={tooltipUUID}>
        {children}
      </span>

      <ReactTooltip
        className={tooltipStyles}
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
  effect: PropTypes.oneOf(['solid', 'float']),
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  align: PropTypes.oneOf(['center', 'left', 'right']),
  children: PropTypes.node.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showOnClick: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
}

Tooltip.defaultProps = {
  className: '',
  content: '',
  effect: 'solid',
  placement: 'bottom',
  showOnClick: false,
  disabled: false,
  align: 'left'
}

export default Tooltip
