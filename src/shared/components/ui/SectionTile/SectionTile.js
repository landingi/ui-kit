import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './SectionTile.scss'

const cssClass = styles(scss)

/**
 * SectionTile - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.thumbnailUrl - thumbnail url
 * @param {function} props.onClick - onClick
 * @param {function} props.onDoubleClick - onDoubleClick
 * @param {boolean} props.isActive - onDoubleClick
 * @return {object} An object of children element
 */
const sectionTile = ({
  children,
  thumbnailUrl,
  onClick,
  onDoubleClick,
  isActive
}) => (
  <div
    style={{
      background: `url(${thumbnailUrl}) center top no-repeat`
    }}
    className={cssClass('section-tile', isActive && 'section-tile--active')}
  >
    <div
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={cssClass('point-area')}
    />
    {children}
  </div>
)

/**
 * Display name
 * @type {string}
 */
sectionTile.displayName = 'Section Tile'

/**
 * The properties.
 * @type {Object}
 */
sectionTile.propTypes = {
  /**
   * Thumbnail url
   */
  thumbnailUrl: PropTypes.string,
  /**
   * click handler
   */
  onClick: PropTypes.func,
  /**
   * double click handler
   */
  onDoubleClick: PropTypes.func,
  /**
   * isActive
   */
  isActive: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
sectionTile.defaultProps = {
  thumbnailUrl: '',
  onClick: () => null,
  onDoubleClick: () => null,
  isActive: false
}

export default sectionTile
