import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import TabContext from './TabContext'
import scss from './Tabs.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * Tabs - stateless presentational component
   * @param {object} props - props
   * @param {string} props.initialValue - initial value
   * @param {string|array} props.className - list of class names, default: `tabs__wrapper`
   * @param {object} props.children - children
   * @param {string|array|object} props.restProps - rest of props
   * @return {object} An object of children element
   */
  tabs = ({
    initialValue,
    className,
    children,
    ...restProps
  }) => {
    const [activeTab, changeTab] = useState(initialValue),
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      tabProviderValue = {
        activeTab,
        changeTab
      }

    return (
      <TabContext.Provider value={tabProviderValue}>
        <div className={cssClass(className)} {...restProps}>
          {children}
        </div>
      </TabContext.Provider>
    )
  }

/**
 * Display name
 * @type {string}
 */
tabs.displayName = 'Tabs'

/**
 * The properties.
 * @type {Object}
 */
tabs.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,

  /**
   * Classname, default `tabs__wrapper`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),

  /**
   * Initial value
   */
  initialValue: PropTypes.string.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
tabs.defaultProps = {
  className: 'tabs__wrapper'
}

export default tabs
