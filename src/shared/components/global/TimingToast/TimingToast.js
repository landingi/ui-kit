import React, {
  useEffect,
  useState,
  useCallback
} from 'react'
import emitter from 'shared/lib/emitter'
import { TOGGLE_TIMING_TOAST } from 'shared/constants/eventTypes'
import Notification from 'shared/components/ui/Notification'
import posed, { PoseGroup } from 'react-pose'
import scss from './TimingToast.scss'
import { styles } from 'shared/helpers/css'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Toast Animation, exports React-pose animations
 * @see {@link https://popmotion.io/pose/api/} for further information.
 * @return {object} An object of styles
 */
const toastProps = {
  open: {
    bottom: 40
  },
  closed: {
    bottom: -100
  }
}

const TimingToastAnimation = posed.div(toastProps)

const timingToast = () => {
  const [isActive, setActive] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')

  const handleToastToggle = useCallback(
    (message, type) => {
      setActive(!isActive)
      message && setMessage(message)
      type && setType(type)
    },
    [isActive, message, type]
  )

  const closeToast = useCallback(
    () => setActive(false),
    [isActive]
  )

  useEffect(() => {
    emitter.on(TOGGLE_TIMING_TOAST, handleToastToggle)

    return () => {
      emitter.off(TOGGLE_TIMING_TOAST, handleToastToggle)
    }
  }, [isActive])

  return (
    <PoseGroup flipMove={false} animateOnMount>
      <TimingToastAnimation
        pose={isActive ? 'open' : 'closed'}
        key="toastanimation"
        className={cssClass(
          'toast',
          isActive ? 'toast--visible' : 'toast--hidden'
        )}
      >
        <Notification
          type={type}
          isClosable
          onClick={closeToast}
          hasTime={isActive}
        >
          {message}
        </Notification>
      </TimingToastAnimation>
    </PoseGroup>
  )
}

export default timingToast

/**
 * Display name
 * @type {string}
 */ timingToast.displayName = 'Toast timing'
