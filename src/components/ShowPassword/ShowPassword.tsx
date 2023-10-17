import { Button } from '@components/Button'
import { Icon } from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, useState } from 'react'

import styles from './ShowPassword.module.scss'

export interface ShowPasswordProps {
  className?: string | string[]
  hasLabel?: boolean
  setHidden?: (value?: string) => void
  i18n?: {
    show?: string
    hide?: string
  }
}

export const ShowPassword: FC<ShowPasswordProps> = ({
  className,
  setHidden = () => {},
  hasLabel,
  i18n = {
    show: '',
    hide: ''
  }
}) => {
  const [icon, setIcon] = useState('icon-eye-close')
  const [label, setLabel] = useState(i18n.show)

  const handleIconSet = () => {
    if (icon === 'icon-eye-close') {
      setIcon('icon-eye-open')
      setHidden('text')
      setLabel(i18n.hide)
    } else {
      setIcon('icon-eye-close')
      setHidden('password')
      setLabel(i18n.show)
    }
  }

  const showPasswordStyles = useStyles(
    { [styles.showpassword]: true },
    className
  )

  return (
    <span
      className={showPasswordStyles}
      onClick={handleIconSet}
      data-testid='show-pasword'
    >
      {hasLabel && (
        <Button hasIcon size='tiny' variant='switcher-brand'>
          <Icon icon={icon} data-testid={icon} />
          {label}
        </Button>
      )}

      {!hasLabel && (
        <Button variant='icon'>
          <Icon icon={icon} />
        </Button>
      )}
    </span>
  )
}

ShowPassword.displayName = 'ShowPassword'
