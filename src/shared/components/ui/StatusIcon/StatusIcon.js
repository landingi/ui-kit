import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './StatusIcon.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * Status Icon - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: `status-icon`
   * @param {string} props.variant - variant of statusIcon active, inactive
   * @param {string} props.size - variant of statusIcon tiny, medium
   */
  statusIcon = ({ className, variant, size }) => (
    <div
      className={cssClass(
        className,
        `status-icon--${variant}`,
        `status-icon--${size}`
      )}
    >
      {variant === 'active' ? (
        <FontAwesomeIcon icon='check' size='xs' />
      ) : (
        <FontAwesomeIcon icon='times' size='xs' />
      )}
    </div>
  )

statusIcon.displayName = 'Status Icon'

statusIcon.propTypes = {
  /**
   * Classname, default `status-icon`
   */
  className: PropTypes.string,

  /**
   * Size, default 'medium'
   */
  size: PropTypes.oneOf(['tiny', 'medium']),

  /**
   * Variant, default 'active'
   */
  variant: PropTypes.oneOf(['active', 'inactive'])
}

/**
 * The default properties.
 * @type {Object}
 */
statusIcon.defaultProps = {
  className: 'status-icon',
  size: 'medium',
  variant: 'active'
}

export default statusIcon
