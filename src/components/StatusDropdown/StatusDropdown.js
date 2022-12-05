import Icon from '@components/Icon'
import { PerfectDropdown } from '@components/PerfectDropdown'
import Spreader from '@components/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './StatusDropdown.module.scss'

/**
 * StatusDropdown - dropdown component that uses custom trigger whose color depends on status prop given
 * @param {object} children - object of children
 * @param {string} label - label text
 * @param {string} dropdownPlacement - dropdown placement
 * @param {string} className - class name
 * @param {string} status - changes color of dropdown
 * @return an object of children
 */
const StatusDropdown = ({
  children,
  label,
  dropdownPlacement,
  className,
  status
}) => {
  const labelClasses = useStyles({
    [styles.trigger__label]: true
  })

  const triggerClasses = useStyles(
    {
      [styles.trigger]: true,
      [styles[`trigger--${status}`]]: true
    },
    className
  )

  const renderArrow = isOpen =>
    isOpen ? <Icon icon='icon-caret-up' /> : <Icon icon='icon-caret-down' />

  return (
    <PerfectDropdown
      dropdownPlacement={dropdownPlacement}
      hasArrow={false}
      size='small'
      customTrigger={({ isOpen }) => (
        <span className={triggerClasses}>
          <span className={labelClasses}>{label}</span>

          <Spreader spread='mini' />

          {renderArrow(isOpen)}
        </span>
      )}
    >
      {children}
    </PerfectDropdown>
  )
}

StatusDropdown.propTypes = {
  dropdownPlacement: PropTypes.string,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  status: PropTypes.oneOf(['alert', 'warning', 'success', 'info'])
}

StatusDropdown.defaultProps = {
  dropdownPlacement: 'bottom-end',
  label: null,
  className: ''
}

StatusDropdown.displayName = 'StatusDropdown'

export default StatusDropdown
