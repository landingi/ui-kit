import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import Tooltip from '@components/ui/Tooltip'
import scss from './Badge.scss'

const cssClass = styles(scss)

/**
 * Badge - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `badge`
 * @param {string} props.type - type of badge primary, secondary, warning, alert
 * @param {string|object} props.tooltip - tooltip content, default: null
 * @param {bool} props.isIndicator - has indicator, default: false
 * @return {object} An object of children element
 */
const Badge = ({ children, className, type, tooltip, isIndicator }) => {
  const badgeRef = useRef()
  const width = badgeRef.current ? badgeRef.current.offsetWidth : 0

  return (
    <Tooltip content={tooltip} disabled={!tooltip || width < 105}>
      <span
        ref={badgeRef}
        className={cssClass(
          className,
          `badge--${type}`,
          isIndicator && 'badge--indicator'
        )}
      >
        <span className={cssClass(tooltip ? 'badge-tooltip' : null)}>
          {children}
        </span>
      </span>
    </Tooltip>
  )
}

Badge.displayName = 'Badge'

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isIndicator: PropTypes.bool
}

Badge.defaultProps = {
  className: 'badge',
  type: 'primary',
  tooltip: null,
  isIndicator: false
}

export default Badge
