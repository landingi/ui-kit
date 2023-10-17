import { Button } from '@components/Button'
import { Icon } from '@components/Icon'
import { Tooltip } from '@components/Tooltip'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Back.module.scss'

export interface BackProps {
  className?: string | string[]
  url?: string
  content?: ReactNode
  label?: string
  onClick?: () => void
}

export const Back: FC<BackProps> = ({
  className = '',
  url,
  content,
  label,
  onClick
}) => {
  const elementStyles = useStyles(
    {
      [styles.back]: true
    },
    className
  )

  return (
    <span data-testid='back' className={elementStyles}>
      <a href={url}>
        <Tooltip
          content={content}
          placement='bottom'
          disabled={!content}
          data-testid='tooltip-back'
        >
          <Button
            variant={label ? 'transparent' : 'icon'}
            hasIcon={!!label}
            onClick={onClick}
            data-testid='button'
          >
            <Icon icon='icon-arrow-left' />

            {label}
          </Button>
        </Tooltip>
      </a>
    </span>
  )
}

Back.displayName = 'Back'
