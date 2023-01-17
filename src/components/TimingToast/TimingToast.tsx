import { Notification } from '@components/Notification'
import { TOGGLE_TIMING_TOAST } from '@constants/eventTypes'
import { useStyles } from '@helpers/hooks/useStyles'
import emitter from '@lib/emitter'
import { FC, useCallback, useEffect, useRef, useState } from 'react'

import styles from './TimingToast.module.scss'

type Type = 'info' | 'success' | 'warning' | 'alert'

interface TimingToastProps {
  className?: string | string[]
}

export const TimingToast: FC<TimingToastProps> = ({ className }) => {
  const [isActive, setActive] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState<Type>('info')

  const autoHideTimer = useRef<NodeJS.Timeout | null>(null)

  const toastStyles = useStyles(
    {
      [styles.toast]: true,
      [styles[`toast--active`]]: isActive
    },
    className
  )

  const handleToastToggle = useCallback(
    (newMessage: string, newType: Type) => {
      setActive(!isActive)

      if (newMessage) {
        setMessage(newMessage)
      }

      if (newType) {
        setType(newType)
      }

      autoHideTimer.current = setTimeout(() => {
        setActive(false)
      }, 5000)
    },
    [isActive, setActive, autoHideTimer]
  )

  const closeToast = useCallback(() => setActive(false), [setActive])

  useEffect(() => {
    emitter.on(TOGGLE_TIMING_TOAST, handleToastToggle)

    return () => {
      emitter.off(TOGGLE_TIMING_TOAST, handleToastToggle)

      clearTimeout(autoHideTimer.current as NodeJS.Timeout)
    }
  }, [handleToastToggle, autoHideTimer])

  return isActive ? (
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
  ) : null
}

TimingToast.displayName = 'TimingToast'
