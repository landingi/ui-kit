import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import emitter from 'shared/lib/emitter'
import { TOGGLE_TOAST } from 'shared/constants/eventTypes'
import Notification from 'shared/components/ui/Notification'
import posed, { PoseGroup } from 'react-pose'
import scss from './Toast.scss'

const cssClass = styles(scss)

/**
 * Toast Animation, exports React-pose animations
 * @see {@link https://popmotion.io/pose/api/} for further information.
 * @return {object} An object of styles
 */
const toastProps = {
  enter: {
    transition: {
      bottom: 40,
      duration: 1000
    }
  },
  exit: {
    transition: {
      bottom: -100,
      duration: 500
    }
  }
}

const ToastAnimation = posed.div(toastProps)

/**
 * Toast stateful container component
 * @param {object} props
 * @param {string|array} props.className
 * @return {object} An object of children elements
 */
const Toast = ({ className }) => {
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
    setActive(!isActive)
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

  const setAutoHideTimer = () => {
    autoHideTimer = setTimeout(() => setActive(false), hideTimeout)
  }

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

  return (
    isActive && (
      <PoseGroup animateOnMount flipMove={false}>
        <ToastAnimation key='toastanimation' className={cssClass(className)}>
          <Notification type={type} onClick={handleToastToggle} isClosable>
            {message}
          </Notification>
        </ToastAnimation>
      </PoseGroup>
    )
  )
}

Toast.displayName = 'Toast'

Toast.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

Toast.defaultProps = {
  className: 'toast'
}

export default Toast
