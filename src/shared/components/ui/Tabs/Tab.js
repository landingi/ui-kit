import { styles } from '@helpers/css'
import Button from '@components/ui/Button'
import PropTypes from 'prop-types'
import React, { useCallback, useContext } from 'react'
import TabContext from './TabContext'
import scss from './Tabs.scss'
import useQueryString from '@helpers/hooks/useQueryString'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * Tab - stateless presentational component
   * @param {object} props - props
   * @param {string} props.name - name
   * @param {string|array} props.className - list of class names, default: `tab`
   * @param {function} props.onClick - onClick handler
   * @param {object} props.children - children
   * @param {string|array|object} props.restProps - rest of props
   * @return {object} An object of children element
   */
  tab = ({ name, className, onClick, children, ...restProps }) => {
    const tabContext = useContext(TabContext),
      activeTab = tabContext.activeTab === name ? 'Tabs__tab--active' : '',
      classNames = `${cssClass(className)} ${activeTab}`,
      [, setTabValue] = useQueryString('tab'),
      /**
       * Handle tab click
       * @type {function}
       */
      handleClick = useCallback(event => {
        setTabValue(name)
        tabContext.changeTab(name)
        onClick(event)
      }, [])

    return (
      <span className={classNames} onClick={handleClick} {...restProps}>
        <Button variant='tabs'>{children}</Button>
      </span>
    )
  }

/**
 * Display name
 * @type {string}
 */
tab.displayName = 'Tab'

/**
 * The properties.
 * @type {Object}
 */
tab.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,

  /**
   * Classname, default `tab`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   * Name
   */
  name: PropTypes.string.isRequired,

  /**
   * Gets called when the user clicks
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
tab.defaultProps = {
  className: 'tab',
  onClick: () => null
}

export default tab
