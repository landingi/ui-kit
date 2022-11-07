import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import TabContext from './TabContext'
import styles from './Tabs.module.scss'

/**
 * Tabs - stateless presentational component
 * @param {object} props - props
 * @param {string} props.initialValue - initial value
 * @param {string|array} props.className - list of class names
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

  const tabsStyles = useStyles({ [styles.tabs__wrapper]: true }, className)

  return (
    <TabContext.Provider value={tabProviderValue}>
      <div className={tabsStyles} {...restProps}>
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
  className: ''
}

export default Tabs
