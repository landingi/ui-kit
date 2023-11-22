import { Button } from '@components/Button'
import { Icon } from '@components/Icon'
import { Spinner } from '@components/Spinner'
import Spreader from '@components/Spreader'
import { Tooltip } from '@components/Tooltip'
import { useDetectOutsideClick } from '@helpers/hooks/useDetectOutsideClick'
import { useHover } from '@helpers/hooks/useHover'
import { useStyles } from '@helpers/hooks/useStyles'
import { useUpdateEffect } from '@helpers/hooks/useUpdateEffect'
import { FC, useCallback, useRef, useState } from 'react'
import { Row } from 'simple-flexbox'

import styles from './EditableLabel.module.scss'

export interface EditableLabelProps {
  initialName: string
  placeholder?: string
  size?: 'small' | 'big'
  onChange?: (name: string) => void
  isLoading?: boolean
  isDisabled?: boolean
  isClickable?: boolean
  tooltip?: {
    focused: string
    notFocused: string
  }
}

export const EditableLabel: FC<EditableLabelProps> = ({
  initialName,
  placeholder = '',
  size = 'big',
  onChange = () => null,
  isLoading = false,
  isDisabled = false,
  isClickable = false,
  tooltip = { focused: '', notFocused: '' }
}) => {
  const [wrapperProps, isHoveredWrapper] = useHover()
  const [isFocused, setFocused] = useState<boolean>(false)
  const [name, setName] = useState<string>(initialName)

  const labelRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = event => setName(event.target.value)

  useUpdateEffect(() => setName(initialName), [initialName])

  const containerStyles = useStyles({
    [styles.container]: true,
    [styles[`container--${size}`]]: size
  })

  const inputStyles = useStyles({
    [styles.input]: true,
    [styles[`input--${size}`]]: size
  })

  const labelStyles = useStyles({
    [styles.label]: true,
    [styles[`label--${size}`]]: size,
    [styles['label--disabled']]: isDisabled
  })

  const buttonStyles = useStyles({
    [styles.button]: true,
    [styles['button--active']]: isHoveredWrapper || isFocused
  })

  const barStyles = useStyles({
    [styles['input-bar']]: true,
    [styles['input-bar--focus-small']]: isFocused && size === 'small',
    [styles['input-bar--focus-big']]: isFocused && size === 'big',
    [styles['input-bar--hover']]:
      isHoveredWrapper && !isFocused && size === 'big' && !isDisabled
  })

  const handleAccept = useCallback(() => {
    if (!(name.length === 0 || name === initialName)) {
      onChange(name)
    }

    setFocused(false)
  }, [name, onChange, setFocused, initialName])

  const handleKeyDown: (event: React.KeyboardEvent) => void = useCallback(
    event => {
      if (event.key === 'Enter') {
        handleAccept()
      }
    },
    [handleAccept]
  )

  const handleFocus = useCallback(() => {
    setFocused(true)
  }, [setFocused])

  useUpdateEffect(() => {
    if (isFocused) {
      inputRef.current?.focus()
    }
  }, [inputRef, isFocused])

  const handeOutsideClick = useCallback(() => {
    setFocused(false)
    setName(initialName)
  }, [setFocused, initialName])

  useDetectOutsideClick(containerRef, handeOutsideClick)

  const shouldTooltipBeDisabled = () => {
    const labelCurrent = labelRef?.current

    if (labelCurrent) {
      return labelCurrent.scrollWidth <= labelCurrent.offsetWidth
    }

    return false
  }

  return (
    <div className={containerStyles} ref={containerRef} {...wrapperProps}>
      <Row className={styles.wrapper} vertical='center'>
        {!isFocused ? (
          <Tooltip
            content={name}
            placement='top'
            align='center'
            disabled={shouldTooltipBeDisabled()}
          >
            <span
              ref={labelRef}
              onClick={isClickable ? handleFocus : () => null}
              data-testid='editable-label'
              className={labelStyles}
            >
              {name}
            </span>
          </Tooltip>
        ) : (
          <input
            className={inputStyles}
            value={name}
            placeholder={placeholder}
            onChange={handleChange}
            type='text'
            onKeyDown={handleKeyDown}
            ref={inputRef}
            data-testid='editable-label-input'
          />
        )}

        <span className={barStyles} />
      </Row>

      <Spreader spread='tiny' />

      {isLoading ? (
        <Spinner />
      ) : (
        !isDisabled && (
          <Tooltip
            content={isFocused ? tooltip.focused : tooltip.notFocused}
            placement='top'
            align='center'
            disabled={!tooltip.focused && !tooltip.notFocused}
          >
            <Button
              variant={
                size === 'small' ? 'icon-transparent' : 'icon-transparent-hover'
              }
              className={buttonStyles}
              onClick={isFocused ? handleAccept : handleFocus}
              size={size === 'small' ? 'mini' : 'medium'}
              data-testid='editable-label-button'
            >
              <Icon icon={isFocused ? 'icon-ok' : 'icon-create'} />
            </Button>
          </Tooltip>
        )
      )}
    </div>
  )
}

EditableLabel.displayName = 'EditableLabel'
