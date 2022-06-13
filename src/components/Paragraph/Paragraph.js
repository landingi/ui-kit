import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Paragraph.module.scss'

//TODO Paragraph check mdx examples
/**
 * Paragraph - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - children
 * @param {string} props.color - color
 * @param {number} props.size - size
 * @param {string} props.align - align
 * @param {string} props.padding - padding
 * @param {number} props.weight - weight
 * @param {boolean} props.uppercase - weight
 * @param {number} props.line - line height
 * @return {object} An object of children element
 */
const Paragraph = ({
  className,
  children,
  color,
  size,
  align,
  padding,
  weight,
  uppercase,
  line
}) => {
  const paragraphStyles = useStyles(
    {
      [styles['paragraph']]: true,
      [styles[`paragraph-color--${color}`]]: color,
      [styles[`paragraph-size--${size}`]]: size,
      [styles[`paragraph-padding--${padding}`]]: padding,
      [styles[`paragraph-align--${align}`]]: align,
      [styles[`paragraph-weight--${weight}`]]: weight,
      [styles['paragraph-uppercase']]: uppercase,
      [styles[`paragraph-line--${line}`]]: line
    },
    className
  )

  return <p className={paragraphStyles}>{children}</p>
}

Paragraph.displayName = 'Paragraph'

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  color: PropTypes.oneOf([
    'accent-1',
    'accent-2',
    'accent-3',
    'accent-4',
    'accent-5',
    'accent-6',
    'accent-7',
    'info',
    'white',
    'color-8'
  ]),
  size: PropTypes.oneOf([10, 12, 14, 16, 18]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  padding: PropTypes.oneOf(['small', 'medium', 'none']),
  weight: PropTypes.oneOf([300, 400, 700]),
  uppercase: PropTypes.bool,
  line: PropTypes.oneOf([18, 20, 22, 24])
}

Paragraph.defaultProps = {
  className: '',
  color: 'accent-1',
  size: 14,
  align: 'left',
  padding: 'medium',
  weight: 300,
  uppercase: false,
  line: 18
}

export default Paragraph
