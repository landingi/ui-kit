import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Divider.scss'

const cssClass = styles(scss)

/**
 * Divider - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - a list of class names, default: `divider`
 * @param {string} props.variant - variant `normal, menu, dropdown, horizontal`
 * @param {string} props.align - align `vertical`
 * @return {object} An object of children element
 */
const Divider = ({ className, variant, align }) => {
  const elementClasses = cssClass({
    'divider--dropdown': variant === 'dropdown',
    'divider--horizontal': variant === 'horizontal',
    'divider--menu': variant === 'menu',
    'divider--normal': variant === 'normal',
    'divider--vertical': align === 'vertical'
  })

  return <div className={cssClass('divider', className, elementClasses)} />
}

Divider.displayName = 'Divider'

Divider.propTypes = {
  align: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  variant: PropTypes.string
}

Divider.defaultProps = {
  align: '',
  className: 'divider',
  variant: 'normal'
}

export default Divider
