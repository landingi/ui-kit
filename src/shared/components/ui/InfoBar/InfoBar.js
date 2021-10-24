import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './InfoBar.scss'

const cssClass = styles(scss)

/**
 * Info Bar - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `info-bar`
 * @param {string} props.type - type of info bar `info, success, warning, alert`
 * @return {object} An object of children element
 */
const InfoBar = ({ children, className, type }) => {
  const icon =
    type === 'warning'
      ? 'exclamation'
      : type === 'alert'
      ? 'exclamation-triangle'
      : 'info'

  return (
    <div className={cssClass(className, `info-bar--${type}`)}>
      <div
        className={cssClass(
          className,
          'info-bar--box',
          `info-bar--${type}-box`
        )}
      >
        <FontAwesomeIcon icon={icon} size='1x' />
      </div>

      <div className={scss.info__bar}>{children}</div>
    </div>
  )
}

InfoBar.displayName = 'InfoBar'

InfoBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.oneOf(['warning', 'info', 'alert', 'success'])
}

InfoBar.defaultProps = {
  className: 'info-bar',
  type: 'info'
}

export default InfoBar
