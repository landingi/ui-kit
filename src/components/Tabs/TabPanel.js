import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import TabContext from './TabContext'
import styles from './Tabs.module.scss'

/**
 * TabPanel - stateless presentational component
 * @param {object} props - props
 * @param {string} props.name - name
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
const TabPanel = ({ name, className, children, ...restProps }) => {
  const tabContext = useContext(TabContext)
  const tabPanelStyles = useStyles({ [styles.tab__panel]: true }, className)

  return (
    tabContext.activeTab === name && (
      <div className={tabPanelStyles} {...restProps}>
        {children}
      </div>
    )
  )
}

TabPanel.displayName = 'TabPanel'

TabPanel.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired
}

TabPanel.defaultProps = {
  className: ''
}

export default TabPanel
