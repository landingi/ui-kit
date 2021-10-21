import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import scss from './Image.scss'

const cssClass = styles(scss),
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
  image = ({ src, alt, className, size, height }) => (
    <img
      alt={alt}
      className={cssClass(className)}
      height={height}
      src={src}
      width={size}
    />
  )

/**
 * Display name
 * @type {string}
 */
image.displayName = 'Image'

/**
 * The properties.
 * @type {Object}
 */
image.propTypes = {
  /**
   * Alt description
   */
  alt: PropTypes.string,
  /**
   * ClassName, default `null`
   */
  className: PropTypes.string,

  /**
   * Height 100, 200 etc
   */
  height: PropTypes.number,

  /**
   * Size 100, 200 etc
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Asset url
   */
  src: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
image.defaultProps = {
  alt: null,
  className: null,
  height: null,
  size: null
}

export default memo(image)
