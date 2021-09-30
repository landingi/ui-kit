import { TOGGLE_TOAST } from '@constants/eventTypes'
import { styles } from '@helpers/css'
import Notification from '@components/ui/Notification'
import PropTypes from 'prop-types'
import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import emitter from '@lib/emitter'
import posed, { PoseGroup } from 'react-pose'
import scss from './Toast.scss'
import useToggle from '@helpers/hooks/useToggle'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss),
  /**
   * Toast Animation, exports React-pose animations
   * @see {@link https://popmotion.io/pose/api/} for further information.
   * @return {object} An object of styles
   */
  toastProps = {
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
  },
  ToastAnimation = posed.div(toastProps)

/**
 * Toast stateful container component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `toast`
 * @return {object} An object of children elements
 */
function Toast({ className }) {
  const [isActive, setActive] = useToggle(),
    [message, setMessage] = useState(''),
    [type, setType] = useState('success'),
    [hideTimeout, setHideTimeout] = useState(5000)
  let autoHideTimer = 100

  /**
   * HandleToastToggle
   * Updates state isActive
   * @type {function}
   */
  const handleToastToggle = useCallback(() => {
      setActive()
    }),
    /**
     * HandleToastData
     * get notification value
     * @param {string} message - message of notification
     * @param {string} type - type of notification
     * @param {int} timeout - timeout to hide notification
     * @type {function}
     */
    handleToastData = (message, type, timeout = 5000) => {
      setMessage(message)
      setType(type)
      setHideTimeout(timeout)
    },
    setAutoHideTimer = () => {
      autoHideTimer = setTimeout(
        () => handleToastToggle(),
        hideTimeout
      )
    },
    clearAutoHideTimer = () => clearTimeout(autoHideTimer)

  /**
   * UseEffect
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
        <ToastAnimation
          className={cssClass(className)}
          key="toastanimation"
        >
          <Notification
            isClosable
            onClick={handleToastToggle}
            type={type}
          >
            {message}
          </Notification>
        </ToastAnimation>
      </PoseGroup>
    )
  )
}

/**
 * Display name
 * @type {string}
 */
Toast.displayName = 'Toast'

/**
 * The properties.
 * @type {Object}
 */
Toast.propTypes = {
  /**
   * Classname, default `toast`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
Toast.defaultProps = {
  className: 'toast'
}

export default Toast
