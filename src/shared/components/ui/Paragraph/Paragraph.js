import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Paragraph.module.scss'

console.log('styles', styles)

/**
 * Paragraph - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: paragraph
 * @param {object} props.children - children
 * @param {string} props.color - color
 * @param {number} props.size - size
 * @param {string} props.align - align
 * @param {string} props.padding - padding
 * @param {number} props.weight - weight
 * @return {object} An object of children element
 */
const Paragraph = ({
  className,
  children,
  color,
  size,
  align,
  padding,
  weight
}) => {
  const defaultClassnames = Array.isArray(className)
    ? className.reduce((rest, name) => {
        return styles[name]
          ? { ...rest, [styles[name]]: true }
          : { ...rest, [name]: true }
      }, {})
    : { [styles[className]]: true }

  const paragraphStyles = useStyles({
    ...defaultClassnames,
    [styles[`${className}-color--${color}`]]: color,
    [styles[`${className}-size--${size}`]]: size,
    [styles[`${className}-size--${padding}`]]: padding,
    [styles[`${className}-size--${align}`]]: align,
    [styles[`${className}-size--${weight}`]]: weight
  })

  return <p className={paragraphStyles}>{children}</p>
}

Paragraph.displayName = 'Paragraph'

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  color: PropTypes.string,
  size: PropTypes.oneOf([12, 14, 16, 18]),
  align: PropTypes.string,
  padding: PropTypes.oneOf(['small', 'medium', 'none']),
  weight: PropTypes.number
}

Paragraph.defaultProps = {
  className: 'paragraph',
  color: 'accent-1',
  size: 14,
  align: null,
  padding: 'medium',
  weight: 300
}

export default Paragraph
