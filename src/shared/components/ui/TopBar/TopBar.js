import React from 'react'
import PropTypes from 'prop-types'
import scss from './TopBar.scss'

/**
 * Top Bar UI presentional stateless functional component
 * @param {object} props - props
 * @param {object} props.children
 * @return {object} An object of children element
 * @type {function}
 */
export const topBar = ({ children }) => (
    <div className={scss.topbardefault}>
      {children}
    </div>
)

/**
 * Display name
 * @type {string}
 */
topBar.displayName = 'TopBar UI element'

/**
 * The default properties.
 * @type {Object}
 */
topBar.defaultProps = {
  children: PropTypes.node.isRequired
}

export default topBar
