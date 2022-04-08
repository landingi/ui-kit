import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@components/ui/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './BoxOutline.module.scss'

/**
 * Box outline - stateless presentational component
 * @param {object} children - children
 * @param {string|array} className - list of custom classes out of component
 * @param {string} variant - box variant
 * @param {boolean} isSelected - bool to decide if box was selected or not
 * @param {func} onClickHandler - callback to invoke when box was clicked
 * @param {func} onDoubleClickHandler - callback to invoke when box was clicked double times
 * @param {string} padding - deafult is set. Set 'none' to turn off
 * @param {boolean} disableHover - disable hover events only
 * @param {boolean} disabled - grayed contend and disable all events
 * @param {boolean} noCheckmark - selected without green checkmark on top right corner
 * @return {object} An object of children element
 */
const BoxOutline = ({
  children,
  className,
  variant,
  isSelected,
  onClickHandler,
  onDoubleClickHandler,
  padding,
  disableHover,
  disabled,
  noCheckmark
}) => {
  const elementClasses = useStyles(
    {
      [styles['box-outline']]: true,
      [styles[`box-outline__${variant}`]]: variant,
      [styles[`box-outline__${variant}--hover`]]: !disableHover,
      [styles['box-outline__is-selected']]: isSelected,
      [styles['box-outline__is-selected--hover']]: isSelected && !disableHover,
      [styles['box-outline__no-padding']]: padding === 'none',
      [styles['box-outline__disabled']]: disabled
    },
    className
  )

  const checkmarkStatusClasses = useStyles({
    [styles['box-outline__checkmark-status']]: true,
    [styles['box-outline__checkmark-status--is-selected']]: isSelected
  })

  return (
    <div
      data-testid='box-outline'
      className={elementClasses}
      onClick={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
    >
      {isSelected && !noCheckmark && (
        <span className={checkmarkStatusClasses}>
          <Icon icon='icon-ok' color='white' />
        </span>
      )}
      {children}
    </div>
  )
}

BoxOutline.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  variant: PropTypes.oneOf(['default', 'background']),
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func,
  onDoubleClickHandler: PropTypes.func,
  padding: PropTypes.oneOf(['', 'none']),
  disableHover: PropTypes.bool,
  disabled: PropTypes.bool,
  noCheckmark: PropTypes.bool
}

BoxOutline.defaultProps = {
  className: '',
  variant: 'default',
  isSelected: false,
  onClick: () => null,
  onDoubleClick: () => null,
  padding: '',
  disableHover: false,
  disabled: false,
  noCheckmark: false
}

BoxOutline.displayName = 'BoxOutline'

export default BoxOutline
