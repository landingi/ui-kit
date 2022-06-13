import React, { useCallback, useEffect, useState } from 'react'
import emitter from '@lib/emitter'
import { TOGGLE_TOAST } from '@constants/eventTypes'
import Notification from '@components/Notification'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Toast.module.scss'

/**
 * Toast stateful container component
 * @param {object} props
 * @param {string|array} props.className
 * @return {object} An object of children elements
 */
const Toast = () => {
  const [isActive, setActive] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')
  const [hideTimeout, setHideTimeout] = useState(5000)
  let autoHideTimer = 100

  /**
   * handleToastToggle
   * Updates state isActive
   * @type {function}
   */
  const handleToastToggle = useCallback(() => {
    setActive(prev => !prev)
  })

  /**
   * handleToastData
   * get notification value
   * @param {string} message - message of notification
   * @param {string} type - type of notification
   * @param {int} timeout - timeout to hide notification
   * @type {function}
   */
  const handleToastData = (message, type, timeout = 5000) => {
    setMessage(message)
    setType(type)
    setHideTimeout(timeout)
  }

  const setAutoHideTimer = () =>
    (autoHideTimer = setTimeout(() => setActive(false), hideTimeout))

  const clearAutoHideTimer = () => clearTimeout(autoHideTimer)

  /**
   * useEffect
   */
  useEffect(() => {
    emitter.on(TOGGLE_TOAST, handleToastToggle)
    emitter.on(TOGGLE_TOAST, handleToastData)

    return () => {
      emitter.off(TOGGLE_TOAST, handleToastToggle)
      emitter.off(TOGGLE_TOAST, handleToastData)
    }
  }, [])

  useEffect(() => {
    emitter.on(TOGGLE_TOAST, setAutoHideTimer)

    return () => {
      emitter.off(TOGGLE_TOAST, setAutoHideTimer)
      clearAutoHideTimer()
    }
  }, [])

  const toastStyles = useStyles({
    [styles.toast]: true,
    [styles['toast--active']]: isActive
  })

  return (
    isActive && (
      <div className={toastStyles} data-testid='toast-component'>
        <Notification type={type} onClick={handleToastToggle} isClosable>
          {message}
        </Notification>
      </div>
    )
  )
}

Toast.displayName = 'Toast'

export default Toast
