import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
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
}) => {
  const sectionStyles = useStyles({
    [styles['section-tile']]: true,
    [styles['section-tile--active']]: isActive
  })

  return (
    <div
      style={{
        background: `url(${thumbnailUrl}) center top no-repeat`
      }}
      className={sectionStyles}
    >
      <div
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        className={styles['point-area']}
        data-testid='point-area'
      />
      {children}
    </div>
  )
}

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
