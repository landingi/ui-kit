import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
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
const List = ({ children, variant, className, listStyle }) => {
  const elementClasses = cssClass({
    'list--inline': variant === 'inline',
    'list--ordered-check': listStyle === 'ordered-check',
    'list--ordered-decimal': listStyle === 'ordered-decimal',
    'list--ordered-disc': listStyle === 'ordered-disc'
  })

  return (
    <ul className={cssClass(className, elementClasses)}>
      {React.Children.toArray(children).filter(item => item)}
    </ul>
  )
}

List.displayName = 'List'

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  listStyle: PropTypes.string,
  variant: PropTypes.oneOf(['inline'])
}

List.defaultProps = {
  className: 'list',
  listStyle: '',
  variant: null
}

export default List
