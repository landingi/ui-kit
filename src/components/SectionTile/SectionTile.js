import React from 'react'
import PropTypes from 'prop-types'
import BoxOutline from '@components/BoxOutline'
import styles from './SectionTile.module.scss'

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
  <BoxOutline
    className={styles.section__tile}
    isSelected={isActive}
    padding='none'
  >
    <div
      style={{
        background: `url(${thumbnailUrl}) center top no-repeat`
      }}
      className={styles['section__pointer-area']}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    />
    {children}
  </BoxOutline>
)

SectionTile.displayName = 'SectionTile'

SectionTile.propTypes = {
  children: PropTypes.node,
  thumbnailUrl: PropTypes.string,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  isActive: PropTypes.bool
}

SectionTile.defaultProps = {
  children: null,
  thumbnailUrl: '',
  isActive: false,
  onClick: () => null,
  onDoubleClick: () => null
}

export default SectionTile
