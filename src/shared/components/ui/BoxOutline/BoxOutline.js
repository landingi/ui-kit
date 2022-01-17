import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './BoxOutline.module.scss'

/**
 * Box outline - stateless presentational component
 * @param {object} children - children
 * @param {string|array} className - list of custom classes out of component
 * @param {boolean} isSelected - bool to decide if box was selected or not
 * @param {func} onClickHandler - callback to invoke when box was clicked
 * @param {func} onDoubleClickHandler - callback to invoke when box was clicked double times
 * @return {object} An object of children element
 */
const BoxOutline = ({
  children,
  className,
  isSelected,
  onClickHandler,
  onDoubleClickHandler
}) => {
  const elementClasses = useStyles(
    {
      [styles['box-outline']]: true,
      [styles['box-outline--is-selected']]: isSelected
    },
    className
  )

  return (
    <div
      data-testid='box-outline'
      className={elementClasses}
      onClick={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
    >
      {children}
    </div>
  )
}

BoxOutline.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  onDoubleClickHandler: PropTypes.func
}

BoxOutline.defaultProps = {
  className: '',
  isSelected: false,
  onDoubleClickHandler: () => undefined
}

BoxOutline.displayName = 'Box outline'

export default BoxOutline
