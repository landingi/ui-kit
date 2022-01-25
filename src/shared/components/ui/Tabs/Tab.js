import React, { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import TabContext from './TabContext'
import Button from '@components/ui/Button'
import useQueryString from '@helpers/hooks/useQueryString'
import { styles } from '@helpers/css'
import scss from './Tabs.scss'

const cssClass = styles(scss)

/**
 * tab - stateless presentational component
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
  const activeTab = tabContext.activeTab === name ? 'Tabs__tab--active' : ''
  const classNames = `${cssClass(className)} ${activeTab}`
  const [, setTabValue] = useQueryString('tab')

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
      className={classNames}
      onClick={isDisabled ? handleDisabledTabClick : handleClick}
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
  isDisabled: PropTypes.bool
}

Tab.defaultProps = {
  className: 'tab',
  onClick: () => null,
  isDisabled: false
}

export default Tab
