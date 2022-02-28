import React from 'react'
import PropTypes from 'prop-types'
import BoxOutline from '@components/ui/BoxOutline'
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
  <div className={styles['section__wrapper']}>
    <BoxOutline
      className={styles['section__tile']}
      isSelected={isActive}
      onClickHandler={onClick}
      onDoubleClickHandler={onDoubleClick}
      padding='none'
    >
      <div
        style={{
          background: `url(${thumbnailUrl}) center top no-repeat`
        }}
        className={styles['section__pointer-area']}
      />
    </BoxOutline>
    {children}
  </div>
)

SectionTile.displayName = 'SectionTile'

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
