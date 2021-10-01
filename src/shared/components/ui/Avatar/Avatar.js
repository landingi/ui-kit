import { styles } from '@helpers/css'
import Image from '@components/ui/Image'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Avatar.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * Avatar - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: `avatar`
   * @param {string} props.size - size of avatar tiny, medium, default: 'medium'
   * @param {string} props.variant - variant of avatar image, default: 'blank'
   * @param {string} props.src - source of avatar image, default: ''
   * @param {string} props.name - avatar name, default: ''
   * @return {object} An object of children element
   */
  avatar = ({ className, size, variant, src, name }) => (
    <span
      className={cssClass(className, `avatar--${size}`, `avatar--${variant}`)}
    >
      {variant === 'image' ? <Image src={src} /> : <p>{name}</p>}
    </span>
  )

/**
 * Display name
 * @type {string}
 */
avatar.displayName = 'Avatar'

/**
 * The properties.
 * @type {Object}
 */
avatar.propTypes = {
  /**
   * Classname, default `avatar`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   * Name
   */
  name: PropTypes.string,

  /**
   * Size
   */
  size: PropTypes.oneOf(['tiny', 'medium']),

  /**
   * Src
   */
  src: PropTypes.string,

  /**
   * Variant
   */
  variant: PropTypes.oneOf(['image', 'blank'])
}

/**
 * The default properties.
 * @type {Object}
 */
avatar.defaultProps = {
  className: 'avatar',
  name: '',
  size: 'medium',
  src: '',
  variant: 'blank'
}

export default avatar
