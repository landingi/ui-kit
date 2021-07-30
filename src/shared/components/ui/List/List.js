import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './List.scss'

const cssClass = styles(scss)

/**
 * List - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.variant - Variant
 * @param {string|array} props.className - list of class names, default: `list`
 * @param {string} props.listStyle - list style
 * @return {object} An object of children element
 */
const list = ({
  children,
  variant,
  className,
  listStyle
}) => {
  const elementClasses = cssClass({
    'list--inline': variant === 'inline',
    'list--ordered-decimal':
      listStyle === 'ordered-decimal',
    'list--ordered-disc': listStyle === 'ordered-disc',
    'list--ordered-check': listStyle === 'ordered-check'
  })

  return (
    <ul className={cssClass(className, elementClasses)}>
      {React.Children.toArray(children).filter(
        item => item
      )}
    </ul>
  )
}

/**
 * Display name
 * @type {string}
 */
list.displayName = 'List'

/**
 * The properties.
 * @type {Object}
 */
list.propTypes = {
  /**
   * Children element
   */
  children: PropTypes.node.isRequired,
  /**
   * Variant
   */
  variant: PropTypes.oneOf(['inline']),
  /**
   * Classname, default `list`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Classname, default `list`
   */
  listStyle: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
list.defaultProps = {
  className: 'list',
  variant: null,
  listStyle: ''
}

export default list
