import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './List.scss'

const cssClass = styles(scss)

/**
 * ListItem - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.variant - Variant `menu, dropdown, table`
 * @param {string} props.size - Size `small`
 * @param {string|array} props.className - list of class names, default: `list__item`,
 * @param {string} props.margin - left margin
 * @return {object} An object of children element
 */
const ListItem = ({ children, variant, size, className, margin }) => {
  const elementClasses = cssClass({
    'list-item--block': variant === 'block',
    'list-item--dropdown': variant === 'dropdown',
    'list-item--list': variant === 'list',
    'list-item--margin': margin,
    'list-item--menu': variant === 'menu',
    'list-item--small': size === 'small',
    'list-item--table': variant === 'table'
  })
  return (
    <li className={cssClass(className, elementClasses)}>
      <div>{children}</div>
    </li>
  )
}

ListItem.displayName = 'ListItem'

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  margin: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.oneOf([
    'menu',
    'dropdown',
    'table',
    'inline',
    'list',
    'block',
    ''
  ])
}

ListItem.defaultProps = {
  className: 'list__item',
  margin: false,
  size: '',
  variant: ''
}

export default ListItem
