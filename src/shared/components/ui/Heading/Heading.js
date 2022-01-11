import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Heading.module.scss'

/**
 * Heading - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {number} props.level - level size, one of: 1, 2, 3, 4, 5, 6, large. Adds css class based on provided level ex. .h1, .h2 etc
 * @param {string|array} props.className- a list of class names, default: `heading`
 * @param {string} props.align - align text `left, center, right`
 * @param {string} props.margin - margin bottom
 * @param {bool} props.bold - bold text
 * @param {string} props.color - text color
 * @return {object} An object of children element
 */
const Heading = ({ children, level, align, margin, bold, color }) => {
  const elementClasses = useStyles({
    [styles['heading']]: true,
    [styles[`h${level}`]]: level,
    [styles['heading--bold']]: bold,
    [styles[`heading--${align}`]]: align,
    [styles['heading--no-margin']]: margin === 'none',
    [styles[`heading__color--${color}`]]: color
  })

  return <span className={elementClasses}>{children}</span>
}

Heading.displayName = 'Heading'

Heading.propTypes = {
  align: PropTypes.string,
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 'large']).isRequired,
  margin: PropTypes.string
}

Heading.defaultProps = {
  align: '',
  margin: '',
  color: undefined,
  bold: false
}

export default Heading
