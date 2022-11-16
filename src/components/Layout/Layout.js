import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Layout.module.scss'

// TODO Layout mdx add background to layouts
/**
 * Layout - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: layout
 * @param {object} props.children - children
 * @param {string} props.width - width
 * @param {string} props.datatestid - data-testid
 * @return {object} An object of children element
 */
const Layout = ({ className, children, width, 'data-testid': dataTestId }) => {
  const layoutStyles = useStyles(
    {
      [styles.layout]: true,
      [styles[`layout-width--${width}`]]: width
    },
    className
  )

  return (
    <div className={layoutStyles} data-testid={dataTestId}>
      {children}
    </div>
  )
}

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  width: PropTypes.oneOf(['large', 'big', 'full']),
  'data-testid': PropTypes.string
}

Layout.defaultProps = {
  className: '',
  width: 'full',
  'data-testid': 'layout-component'
}

export default Layout
