import React from 'react'
import PropTypes from 'prop-types'
import Spreader from '@components/ui/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Separator.module.scss'

/**
 * Separator - stateless presentational component
 * @param {object} props.children - children
 * @param {string} props.size - size
 * @param {string} props.color - color
 * @return {object} An object of children element
 */
const Separator = ({ children, size, color }) => {
  const elementClasses = useStyles({
    [styles['separator__divider']]: true,
    [styles['separator__divider--medium']]: size === 'medium',
    [styles['separator__divider--color-4']]: color === 'color-4'
  })

  return (
    <div className={styles.separator}>
      <div className={elementClasses} />

      <Spreader spread='tiny' />

      {children}

      <Spreader spread='tiny' />

      <div className={elementClasses} />
    </div>
  )
}

Separator.displayName = 'Separator'

Separator.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
}

Separator.defaultProps = {
  size: 'medium',
  color: 'color-4'
}

export default Separator
