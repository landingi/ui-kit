import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './GalleryImage.scss'

const cssClass = styles(scss)

//TODO GalleryImage css, mdx
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
