import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import TabContext from './TabContext'
import scss from './Tabs.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * TabPanel - stateless presentational component
   * @param {object} props - props
   * @param {string} props.name - name
   * @param {string|array} props.className - list of class names, default: `tab__panel`
   * @param {object} props.children - children
   * @param {string|array|object} props.restProps - rest of props
   * @return {object} An object of children element
   */
  tabPanel = ({ name, className, children, ...restProps }) => {
    const tabContext = useContext(TabContext),
      classNames = `${cssClass(className)} Tab--active`

    return (
      tabContext.activeTab === name && (
        <div className={classNames} {...restProps}>
          {children}
        </div>
      )
    )
  }

/**
 * Display name
 * @type {string}
 */
tabPanel.displayName = 'TabPanel'

/**
 * The properties.
 * @type {Object}
 */
tabPanel.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,

  /**
   * Classname, default `tab__panel`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   * Name
   */
  name: PropTypes.string.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
tabPanel.defaultProps = {
  className: 'tab__panel'
}

export default tabPanel
