import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
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
const image = ({ src, alt, className, size, height }) => (
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
   * Classname, default `null`
   */
  className: PropTypes.string,
  /**
   * Size 100, 200 etc
   */
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
   * Height 100, 200 etc
   */
  height: PropTypes.number,
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
  className: null,
  size: null,
  height: null,
  alt: null
}

export default memo(image)
