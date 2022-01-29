import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './SectionTile.scss'

const cssClass = styles(scss)

//TODO SectionTile css, mdx, test
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
const SectionTile = ({
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

SectionTile.displayName = 'Section Tile'

SectionTile.propTypes = {
  children: PropTypes.node.isRequired,
  thumbnailUrl: PropTypes.string,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  isActive: PropTypes.bool
}

SectionTile.defaultProps = {
  thumbnailUrl: '',
  isActive: false,
  onClick: () => null,
  onDoubleClick: () => null
}

export default SectionTile
