import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TabContext from './TabContext'
import { styles } from '@helpers/css'
import scss from './Tabs.scss'

const cssClass = styles(scss)

//TODO Tabs css, mdx,test
/**
 * tabs - stateless presentational component
 * @param {object} props - props
 * @param {string} props.initialValue - initial value
 * @param {string|array} props.className - list of class names, default: `tabs__wrapper`
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
const Tabs = ({ initialValue, className, children, ...restProps }) => {
  const [activeTab, changeTab] = useState(initialValue)
  const tabProviderValue = {
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

Tabs.displayName = 'Tabs'

Tabs.propTypes = {
  initialValue: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired
}

Tabs.defaultProps = {
  className: 'tabs__wrapper'
}

export default Tabs
