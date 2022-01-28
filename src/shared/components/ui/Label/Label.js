import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import scss from './Label.scss'

const cssClass = styles(scss)

/**
 * Label - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `label`
 * @param {string} props.id - input id
 * @param {bool} props.isToggle - is toggle label
 * @param {bool} props.toggle - toggle change
 * @return {object} An object of children element
 */
const Label = memo(({ children, className, id, isToggle, toggle }) => (
  <label
    className={cssClass(
      className,
      isToggle
        ? toggle
          ? 'label--active'
          : 'label--inactive'
        : 'label--normal'
    )}
    id={id}
  >
    {children}
  </label>
))

Label.displayName = 'Label'

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
  isToggle: PropTypes.bool,
  toggle: PropTypes.bool
}

Label.defaultProps = {
  className: 'label',
  id: null,
  isToggle: false,
  toggle: false
}

export default Label
