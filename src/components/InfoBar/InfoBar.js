import Icon from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './InfoBar.module.scss'

/**
 * Info Bar - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of custom class names
 * @param {string} props.type - type of info bar `info, success, warning, alert`
 * @return {object} An object of children element
 */
const InfoBar = ({ children, className, type }) => {
  const elementClasses = useStyles(
    {
      [styles[`info-bar`]]: true,
      [styles[`info-bar--${type}`]]: type
    },
    className
  )

  const boxClasses = useStyles({
    [styles[`info-bar--box`]]: true,
    [styles[`info-bar--${type}-box`]]: type
  })

  const icon =
    type === 'warning'? 'exclamation': type === 'alert'? 'exclamation-triangle': 'info'

  return (
    <div data-testid='infobar-wrapper' className={elementClasses}>
      <div className={boxClasses}>
        <Icon icon={icon} />
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
  className: '',
  type: 'info'
}

export default InfoBar
