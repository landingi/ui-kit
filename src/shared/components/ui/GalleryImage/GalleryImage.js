import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './GalleryImage.scss'

const cssClass = styles(scss)

/**
 * galleryImage - stateless presentational component
 * @param {object} props - props
 * @param {string} props.src - src url
 * @param {func} props.onClick - onClick handler function
 * @param {func} props.onDoubleClick - on double click handler function
 * @return {object} An object of children element
 */
const galleryImage = ({ src, onClick, onDoubleClick }) => (
  <div
    className={cssClass('background')}
    onClick={onClick}
    onDoubleClick={onDoubleClick}
  >
    <div
      className={cssClass('image')}
      style={{ backgroundImage: `url(${src})` }}
    />
  </div>
)

/**
 * Display name
 * @type {string}
 */
galleryImage.displayName = 'Gallery Image'

/**
 * The properties.
 * @type {Object}
 */
galleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
galleryImage.defaultProps = {
  onClick: () => null,
  onDoubleClick: () => null
}

export default galleryImage
