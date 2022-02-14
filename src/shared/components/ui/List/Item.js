import PropTypes from 'prop-types'
import React from 'react'
import styles from './List.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * ListItem - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.variant - Variant `menu, dropdown, table`
 * @param {string} props.size - size
 * @param {string|array} props.className - list of class names, default: `list__item`,
 * @param {bool} props.margin - left margin
 * @return {object} An object of children element
 */
const ListItem = ({ children, variant, size, className, margin }) => {
  const elementClasses = useStyles(
    {
      [styles['list__item']]: true,
      [styles['list-item--block']]: variant === 'block',
      [styles['list-item--dropdown']]: variant === 'dropdown',
      [styles['list-item--list']]: variant === 'list',
      [styles['list-item--margin']]: margin,
      [styles['list-item--menu']]: variant === 'menu',
      [styles['list-item--small']]: size === 'small',
      [styles['list-item--table']]: variant === 'table'
    },
    className
  )
  return (
    <li className={elementClasses}>
      <div>{children}</div>
    </li>
  )
}

ListItem.displayName = 'ListItem'

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  margin: PropTypes.bool,
  size: PropTypes.oneOf(['small', '']),
  variant: PropTypes.oneOf(['menu', 'dropdown', 'table', 'list', 'block', ''])
}

ListItem.defaultProps = {
  className: '',
  margin: false,
  size: '',
  variant: ''
}

export default ListItem
