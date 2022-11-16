import Button from '@components/Button'
import useQueryString from '@helpers/hooks/useQueryString'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React, { useCallback, useContext } from 'react'

import TabContext from './TabContext'
import styles from './Tabs.module.scss'

/**
 * Tab - stateless presentational component
 * @param {object} props - props
 * @param {string} props.name - name
 * @param {string|array} props.className - list of class names, default: `tab`
 * @param {function} props.onClick - onClick handler
 * @param {bool} props.isDisabled - is opening tab disabled
 * @param {object} props.children - children
 * @param {string|array|object} props.restProps - rest of props
 * @return {object} An object of children element
 */
const Tab = ({
  name,
  className,
  onClick,
  isDisabled,
  children,
  ...restProps
}) => {
  const tabContext = useContext(TabContext)
  const [, setTabValue] = useQueryString('tab')

  const tabStyles = useStyles(
    {
      [styles.tab]: true,
      [styles['tab--active']]: tabContext.activeTab === name
    },
    className
  )

  /**
   * Handle tab click
   * @type {function}
   */
  const handleClick = useCallback(event => {
    setTabValue(name)
    tabContext.changeTab(name)
    onClick(event)
  }, [])

  /**
   * Handle disabled tab click
   * invoke only custom handler without opening tab
   * @type {function}
   */
  const handleDisabledTabClick = useCallback(event => onClick(event), [])

  return (
    <span
      className={tabStyles}
      onClick={isDisabled ? handleDisabledTabClick : handleClick}
      data-testid='tab-button'
      {...restProps}
    >
      <Button variant='tabs'>{children}</Button>
    </span>
  )
}

Tab.displayName = 'Tab'

Tab.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  isDisabled: PropTypes.bool,
  onDisabledClick: PropTypes.func
}

Tab.defaultProps = {
  className: '',
  onClick: () => null,
  isDisabled: false
}

export default Tab
