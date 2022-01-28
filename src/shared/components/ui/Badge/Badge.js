import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@components/ui/Tooltip'
import styles from './Badge.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Badge - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names
 * @param {string} props.type - type of badge
 * @param {string|object} props.tooltip - tooltip content
 * @param {bool} props.isIndicator - has indicator
 * @return {object} An object of children element
 */
const Badge = ({ children, className, type, tooltip, isIndicator }) => {
  const badgeRef = useRef()
  const width = badgeRef.current ? badgeRef.current.offsetWidth : 0

  const badgeStyles = useStyles(
    {
      [styles['badge']]: true,
      [styles[`badge--${type}`]]: type,
      [styles['badge--indicator']]: isIndicator
    },
    className
  )

  const tooltipStyles = useStyles({
    [styles['badge-tooltip']]: tooltip
  })

  return (
    <Tooltip content={tooltip} disabled={!tooltip || width < 105}>
      <span ref={badgeRef} className={badgeStyles}>
        <span className={tooltipStyles}>{children}</span>
      </span>
    </Tooltip>
  )
}

Badge.displayName = 'Badge'

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'warning',
    'alert',
    'pending',
    'success',
    'info',
    'accent-1',
    'accent-2'
  ]),
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isIndicator: PropTypes.bool
}

Badge.defaultProps = {
  className: '',
  type: 'primary',
  tooltip: null,
  isIndicator: false
}

export default Badge
