import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import styles from './Image.module.scss'

/**
 * Image - stateless presentational component
 * @param {object} props - props
 * @param {string} props.src - src url
 * @param {string} props.alt - alt text
 * @param {string|array} props.className - list of class names
 * @param {number|string} props.size - width of the image
 * @param {number} props.height - height of the image
 * @param {boolean} props.auto - auto size of image
 * @param {boolean} props.small - small image
 * @param {string} props.loadingAttr - loading attribute for img e.g eager, lazy
 * @return {object} An object of children element
 */
const Image = ({
  src,
  alt,
  className,
  size,
  height,
  auto,
  small,
  loadingAttr
}) => {
  const elementStyles = useStyles(
    {
      [styles['image--auto']]: auto,
      [styles['image--small']]: small
    },
    className
  )

  return (
    <img
      alt={alt}
      className={elementStyles}
      height={height}
      src={src}
      width={size}
      loading={loadingAttr}
      data-testid='image'
    />
  )
}

Image.displayName = 'Image'

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  src: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]).isRequired,
  auto: PropTypes.bool,
  small: PropTypes.bool,
  loadingAttr: PropTypes.oneOf(['lazy', 'eager'])
}

Image.defaultProps = {
  alt: null,
  className: '',
  height: null,
  size: null,
  auto: false,
  small: false,
  loadingAttr: 'eager'
}

export default memo(Image)
