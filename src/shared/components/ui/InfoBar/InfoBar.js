import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './InfoBar.module.scss'

/**
 * Info Bar - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `info-bar`
 * @param {string} props.type - type of info bar `info, success, warning, alert`
 * @return {object} An object of children element
 */
const InfoBar = ({ children, className, type }) => {
  const elementClasses = useStyles(
    {
      [styles[`info-bar--${type}`]]: type
    },
    className
  )

  const boxClasses = useStyles({
    [styles[`info-bar--box`]]: true,
    [styles[`info-bar--${type}-box`]]: type
  })

  const icon =
    type === 'warning'
      ? 'exclamation'
      : type === 'alert'
      ? 'exclamation-triangle'
      : 'info'

  return (
    <div className={elementClasses}>
      <div className={boxClasses}>
        <FontAwesomeIcon icon={icon} size='1x' />
      </div>

      <div className={styles.info__bar}>{children}</div>
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
