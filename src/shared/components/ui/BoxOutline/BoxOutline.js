import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@components/ui/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './BoxOutline.module.scss'

// TODO BoxOutline add mdx examples
/**
 * Box outline - stateless presentational component
 * @param {object} children - children
 * @param {string|array} className - list of custom classes out of component
 * @param {boolean} isSelected - bool to decide if box was selected or not
 * @param {func} onClickHandler - callback to invoke when box was clicked
 * @param {func} onDoubleClickHandler - callback to invoke when box was clicked double times
 * @param {string} padding - deafult is set. Set 'none' to turn off
 * @return {object} An object of children element
 */
const BoxOutline = ({
  children,
  className,
  isSelected,
  onClickHandler,
  onDoubleClickHandler,
  padding
}) => {
  const elementClasses = useStyles(
    {
      [styles['box-outline']]: true,
      [styles['box-outline--is-selected']]: isSelected,
      [styles['box-outline--no-padding']]: padding === 'none'
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
      {isSelected && (
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
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func,
  onDoubleClickHandler: PropTypes.func,
  padding: PropTypes.oneOf(['', 'none'])
}

BoxOutline.defaultProps = {
  className: '',
  isSelected: false,
  onClick: () => null,
  onDoubleClick: () => null,
  padding: ''
}

BoxOutline.displayName = 'BoxOutline'

export default BoxOutline
