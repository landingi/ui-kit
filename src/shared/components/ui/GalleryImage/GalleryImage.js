import React from 'react'
import PropTypes from 'prop-types'
import styles from './GalleryImage.module.scss'

/**
 * GalleryImage - stateless presentational component
 * @param {object} props - props
 * @param {string} props.src - src url
 * @param {func} props.onClick - onClick handler function
 * @param {func} props.onDoubleClick - on double click handler function
 * @return {object} An object of children element
 */
const GalleryImage = ({ src, onClick, onDoubleClick }) => (
  <div
    className={styles.background}
    onClick={onClick}
    onDoubleClick={onDoubleClick}
    data-testid='gallery-image'
  >
    <div className={styles.image} style={{ backgroundImage: `url(${src})` }} />
  </div>
)

GalleryImage.displayName = 'GalleryImage'

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func
}

GalleryImage.defaultProps = {
  onClick: () => null,
  onDoubleClick: () => null
}

export default GalleryImage
