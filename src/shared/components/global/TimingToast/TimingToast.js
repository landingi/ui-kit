import React, { useEffect, useState, useCallback } from 'react'
import emitter from '@lib/emitter'
import { TOGGLE_TIMING_TOAST } from '@constants/eventTypes'
import Notification from '@components/ui/Notification'
import posed, { PoseGroup } from 'react-pose'
import styles from './TimingToast.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'

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

/**
 * TimingToast - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @return {object} An object of children element
 */
const TimingToast = ({ className }) => {
  const [isActive, setActive] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState('info')

  const toastStyles = useStyles(
    {
      [styles['toast']]: true,
      [styles[`toast--visible`]]: isActive,
      [styles[`toast--hidden`]]: !!isActive
    },
    className
  )

  const handleToastToggle = useCallback(
    (message, type) => {
      setActive(!isActive)
      message && setMessage(message)
      type && setType(type)
    },
    [isActive, message, type]
  )

  const closeToast = useCallback(() => setActive(false), [isActive])

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
        key='toastanimation'
        className={toastStyles}
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

TimingToast.displayName = 'Timing Toasr'

TimingToast.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

TimingToast.defaultProps = {
  className: '',
  type: 'info'
}

export default TimingToast
