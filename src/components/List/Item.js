import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './List.module.scss'

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
      [styles[`list-item--${variant}`]]: variant,
      [styles['list-item--margin']]: margin,
      [styles['list-item--small']]: size === 'small'
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
  variant: PropTypes.oneOf([
    'menu',
    'dropdown',
    'table',
    'list',
    'block',
    'inline',
    ''
  ])
}

ListItem.defaultProps = {
  className: '',
  margin: false,
  size: '',
  variant: ''
}

export default ListItem
