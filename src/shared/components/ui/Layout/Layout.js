import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Layout.scss'

const cssClass = styles(scss)

/**
 * Layout - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: layout
 * @param {object} props.children - children
 * @param {string} props.width - width
 * @return {object} An object of children element
 */
const Layout = ({ className, children, width }) => (
  <div className={cssClass(className, `layout-width--${width}`)}>
    {children}
  </div>
)

Layout.displayName = 'Layout'

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  width: PropTypes.string
}

Layout.defaultProps = {
  className: 'layout',
  width: 'full'
}

export default Layout
