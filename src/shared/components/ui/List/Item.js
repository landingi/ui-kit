import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
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
const listItem = ({
  children,
  variant,
  size,
  className,
  margin
}) => {
  const elementClasses = cssClass({
    'list-item--menu': variant === 'menu',
    'list-item--dropdown': variant === 'dropdown',
    'list-item--table': variant === 'table',
    'list-item--list': variant === 'list',
    'list-item--block': variant === 'block',
    'list-item--small': size === 'small',
    'list-item--margin': margin
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
  ]),
  /**
   * Size
   */
  size: PropTypes.string,
  /**
   * Classname, default `list__item`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Margin
   */
  margin: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
listItem.defaultProps = {
  className: 'list__item',
  variant: '',
  size: '',
  margin: false
}

export default listItem
