import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Section.module.scss'

/**
 * Section - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: section
 * @param {object} props.children - children
 * @param {string} props.space - Space
 * @param {string} props.width - width
 * @param {string} props.background - style
 * @return {object} An object of children element
 */
const Section = ({ className, children, space, width, background }) => {
  const elementClasses = useStyles(
    {
      [styles.section]: true,
      [styles[`section-space--${space}`]]: space,
      [styles[`layout-width--${width}`]]: width,
      [styles[`section-bg--${background}`]]: background
    },
    className
  )

  return <div className={elementClasses}>{children}</div>
}

Section.displayName = 'Section'

Section.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  space: PropTypes.string,
  width: PropTypes.string
}

Section.defaultProps = {
  className: '',
  background: 'default',
  space: 'medium',
  width: 'full'
}

export default Section
