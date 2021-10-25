import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import scss from './Image.scss'

const cssClass = styles(scss)

/**
 * Image - stateless presentational component
 * @param {object} props - props
 * @param {string} props.src - src url
 * @param {string} props.alt - alt text
 * @param {string|array} props.className - list of class names
 * @param {number|string} props.size - width of the image
 * @param {number} props.height - height of the image
 * @return {object} An object of children element
 */
const Image = ({ src, alt, className, size, height }) => (
  <img
    alt={alt}
    className={cssClass(className)}
    height={height}
    src={src}
    width={size}
  />
)

Image.displayName = 'Image'

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  src: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]).isRequired
}

Image.defaultProps = {
  alt: null,
  className: null,
  height: null,
  size: null
}

export default memo(Image)
