import { Notification } from '@components/Notification'
import { TOGGLE_TOAST } from '@constants/eventTypes'
import { useStyles } from '@helpers/hooks/useStyles'
import emitter from '@lib/emitter'
import { useCallback, useEffect, useState } from 'react'

import styles from './Toast.module.scss'

type Type = 'info' | 'success' | 'warning' | 'alert'

export const Toast = () => {
  const [isActive, setActive] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  const [type, setType] = useState<Type>('success')
  const [hideTimeout, setHideTimeout] = useState(99999999)

  let autoHideTimer: NodeJS.Timeout | null = null

  const handleToastToggle = useCallback(() => {
    setActive(prev => !prev)
  }, [setActive])

  const handleToastData = (
    newMessage: string,
    newType: Type,
    timeout: number = 5000
  ) => {
    setMessage(newMessage)
    setType(newType)
    setHideTimeout(timeout)
  }

  const setAutoHideTimer = () => {
    autoHideTimer = setTimeout(() => setActive(false), hideTimeout)
  }

  useEffect(() => {
    emitter.on(TOGGLE_TOAST, handleToastToggle)
    emitter.on(TOGGLE_TOAST, handleToastData)

    return () => {
      emitter.off(TOGGLE_TOAST, handleToastToggle)
      emitter.off(TOGGLE_TOAST, handleToastData)
    }
    // we don't want to re-run this effect when the message or type changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    emitter.on(TOGGLE_TOAST, setAutoHideTimer)

    return () => {
      emitter.off(TOGGLE_TOAST, setAutoHideTimer)

      clearTimeout(autoHideTimer as NodeJS.Timeout)
    }

    // we don't want to re-run this effect when the setAutoHideTimer changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toastStyles = useStyles({
    [styles.toast]: true,
    [styles['toast--active']]: isActive
  })

  return isActive ? (
    <div className={toastStyles} data-testid='toast-component'>
      <Notification type={type} onClick={handleToastToggle} isClosable>
        {message}
      </Notification>
    </div>
  ) : null
}

Toast.displayName = 'Toast'
