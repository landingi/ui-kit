import React, {
  useEffect,
  useState,
  useCallback
} from 'react'
import emitter from '@lib/emitter'
import { TOGGLE_TIMING_TOAST } from '@constants/eventTypes'
import Notification from '@components/ui/Notification'
import posed, { PoseGroup } from 'react-pose'
import scss from './TimingToast.scss'
import { styles } from '@helpers/css'

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
    <PoseGroup animateOnMount flipMove={false}>
      <TimingToastAnimation
        className={cssClass(
          'toast',
          isActive ? 'toast--visible' : 'toast--hidden'
        )}
        key='toastanimation'
        pose={isActive ? 'open' : 'closed'}
      >
        <Notification
          hasTime={isActive}
          isClosable
          onClick={closeToast}
          type={type}
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
