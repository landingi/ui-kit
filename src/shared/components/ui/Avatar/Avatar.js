import { styles } from '@helpers/css'
import Image from '@components/ui/Image'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Avatar.scss'

const cssClass = styles(scss)

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
const Avatar = ({ className, size, variant, src, name }) => (
  <span
    className={cssClass(className, `avatar--${size}`, `avatar--${variant}`)}
  >
    {variant === 'image' ? <Image src={src} /> : <p>{name}</p>}
  </span>
)

Avatar.displayName = 'Avatar'

Avatar.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'medium']),
  src: PropTypes.string,
  variant: PropTypes.oneOf(['image', 'blank'])
}

Avatar.defaultProps = {
  className: 'avatar',
  name: '',
  size: 'medium',
  src: '',
  variant: 'blank'
}

export default Avatar
