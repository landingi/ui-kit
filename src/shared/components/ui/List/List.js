import React from 'react'
import PropTypes from 'prop-types'
import styles from './List.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * List - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.variant - Variant
 * @param {string|array} props.className - list of class names out of component
 * @param {string} props.listStyle - list style
 * @return {object} An object of children element
 */
const List = ({ children, variant, className, listStyle }) => {
  const elementClasses = useStyles(
    {
      [styles['list']]: true,
      [styles['list--inline']]: variant === 'inline',
      [styles[`list--${listStyle}`]]: listStyle
    },
    className
  )

  return (
    <ul className={elementClasses}>
      {React.Children.toArray(children).filter(item => item)}
    </ul>
  )
}

List.displayName = 'List'

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  listStyle: PropTypes.oneOf([
    'ordered-check',
    'ordered-decimal',
    'ordered-disc',
    ''
  ]),
  variant: PropTypes.oneOf(['inline', ''])
}

List.defaultProps = {
  className: '',
  listStyle: '',
  variant: ''
}

export default List
