import React, { useEffect, useState, useCallback } from 'react'
import emitter from '@lib/emitter'
import { TOGGLE_TIMING_TOAST } from '@constants/eventTypes'
import Notification from '@components/Notification'
import styles from './TimingToast.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'

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
      [styles[`toast--active`]]: isActive
    },
    className
  )

  let autoHideTimer

  const setAutoHideTimer = () =>
    (autoHideTimer = setTimeout(() => setActive(false), 5000))

  const handleToastToggle = useCallback(
    (message, type) => {
      setActive(!isActive)

      message && setMessage(message)

      type && setType(type)

      setAutoHideTimer()
    },
    [isActive, message, type, autoHideTimer]
  )

  const closeToast = useCallback(() => setActive(false), [isActive])

  useEffect(() => {
    emitter.on(TOGGLE_TIMING_TOAST, handleToastToggle)

    return () => {
      emitter.off(TOGGLE_TIMING_TOAST, handleToastToggle)

      clearTimeout(autoHideTimer)
    }
  }, [])

  return (
    isActive && (
      <div className={toastStyles} data-testid='toast-component'>
        <Notification
          type={type}
          isClosable
          onClick={closeToast}
          hasTime={isActive}
        >
          {message}
        </Notification>
      </div>
    )
  )
}

TimingToast.displayName = 'TimingToast'

TimingToast.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

TimingToast.defaultProps = {
  className: '',
  type: 'info'
}

export default TimingToast
