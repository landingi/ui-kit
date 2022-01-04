import Image from '@components/ui/Image'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Avatar.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

const renderVariant = (variant, src, name) =>
  variant === 'image' ? <Image src={src} /> : <p>{name}</p>

/**
 * Avatar - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {string} props.size - size of avatar
 * @param {string} props.variant - variant of avatar image
 * @param {string} props.src - source of avatar image
 * @param {string} props.name - avatar name
 * @return {object} An object of children element
 */
const Avatar = ({ className, size, variant, src, name }) => {
  const avatarStyles = useStyles({
    [className]: true,
    [styles[`avatar--${size}`]]: size,
    [styles[`avatar--${variant}`]]: variant
  })

  return (
    <span className={avatarStyles}>{renderVariant(variant, src, name)}</span>
  )
}

Avatar.displayName = 'Avatar'

Avatar.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'medium']),
  src: PropTypes.string,
  variant: PropTypes.oneOf(['image', 'blank'])
}

Avatar.defaultProps = {
  className: styles['avatar'],
  name: null,
  size: 'medium',
  src: '',
  variant: 'blank'
}

export default Avatar
