import { Notification } from '@components/Notification'
import { TOGGLE_TIMING_TOAST } from '@constants/eventTypes'
import { useStyles } from '@helpers/hooks/useStyles'
import emitter from '@lib/emitter'
import { FC, useCallback, useEffect, useState } from 'react'

import styles from './TimingToast.module.scss'

type Type = 'info' | 'success' | 'warning' | 'alert'

interface TimingToastProps {
  className?: string | string[]
}

export const TimingToast: FC<TimingToastProps> = ({ className }) => {
  const [isActive, setActive] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState<Type>('info')

  let autoHideTimer: NodeJS.Timeout | null = null

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

      // we want to reset the timer every time we open the toast
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoHideTimer = setTimeout(() => {
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

      clearTimeout(autoHideTimer as NodeJS.Timeout)
    }
    // we want to run this effect only once, in other case we will have an infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
