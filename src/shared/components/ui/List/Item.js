import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './List.scss'

const cssClass = styles(scss)
/**
 * List item - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.variant - Variant `menu, dropdown, table`
 * @param {string} props.size - Size `small`
 * @param {string|array} props.className - list of class names, default: `list__item`,
 * @param {string} props.margin - left margin
 * @return {object} An object of children element
 */
const listItem = ({ children, variant, size, className, margin }) => {
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

/**
 * Display name
 * @type {string}
 */
listItem.displayName = 'List item'

/**
 * The properties.
 * @type {Object}
 */
listItem.propTypes = {
  /**
   * Children element
   */
  children: PropTypes.node.isRequired,

  /**
   * ClassName, default `list__item`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   * Margin
   */
  margin: PropTypes.bool,

  /**
   * Size
   */
  size: PropTypes.string,

  /**
   * Variant
   */
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

/**
 * The default properties.
 * @type {Object}
 */
listItem.defaultProps = {
  className: 'list__item',
  margin: false,
  size: '',
  variant: ''
}

export default listItem
