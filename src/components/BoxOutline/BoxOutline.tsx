import { Icon } from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, MouseEvent, PointerEvent, ReactNode } from 'react'

import styles from './BoxOutline.module.scss'

interface BoxOutlineProps {
  children: ReactNode
  className?: string | string[]
  variant?: 'default' | 'background'
  isSelected?: boolean
  onClickHandler?: (e: PointerEvent<HTMLDivElement>) => void
  onDoubleClickHandler?: (e: PointerEvent<HTMLDivElement>) => void
  padding?: 'none' | 'large'
  disableHover?: boolean
  disabled?: boolean
  noCheckmark?: boolean
  onMouseOver?: (e: MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void
}

export const BoxOutline: FC<BoxOutlineProps> = ({
  children,
  className = '',
  variant = 'default',
  isSelected = false,
  onClickHandler,
  onDoubleClickHandler,
  padding,
  disableHover = false,
  disabled = false,
  noCheckmark = false,
  onMouseOver,
  onMouseLeave,
  ...rest
}) => {
  const elementClasses = useStyles(
    {
      [styles['box-outline']]: true,
      [styles[`box-outline__${variant}`]]: variant,
      [styles[`box-outline__${variant}--hover`]]: !disableHover,
      [styles['box-outline__is-selected']]: isSelected,
      [styles['box-outline__is-selected--hover']]: isSelected && !disableHover,
      [styles['box-outline__no-padding']]: padding === 'none',
      [styles['box-outline__padding-large']]: padding === 'large',
      [styles['box-outline__disabled']]: disabled
    },
    className
  )

  const checkmarkStatusClasses = useStyles({
    [styles['box-outline__checkmark-status']]: true,
    [styles['box-outline__checkmark-status--is-selected']]: isSelected
  })

  return (
    <div
      data-testid='box-outline'
      className={elementClasses}
      onClick={onClickHandler}
      onDoubleClick={onDoubleClickHandler}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {isSelected && !noCheckmark && (
        <span className={checkmarkStatusClasses}>
          <Icon icon='icon-ok' color='white' />
        </span>
      )}
      {children}
    </div>
  )
}

BoxOutline.displayName = 'BoxOutline'
