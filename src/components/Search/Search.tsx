import Button from '@components/Button'
import { Icon } from '@components/Icon'
import { Input } from '@components/Input'
import { useStyles } from '@helpers/hooks/useStyles'
import {
  ChangeEvent,
  FC,
  Fragment,
  KeyboardEvent,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'

import styles from './Search.module.scss'

export interface SearchProps {
  className?: string | string[]
  variant?: 'input' | 'button'
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event?: KeyboardEvent<HTMLInputElement>) => void
  autoFocus?: boolean
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  onSubmit?: (value?: string) => void
  onClean?: () => void
  i18n?: {
    placeholder?: string
    label?: string
  }
  tag?: 'div' | 'form'
  onProtectedSubmit?: (value?: string) => void
  submitEmptyOnBlur?: boolean
  defaultValue?: string
  searchIcon?: string | null
  isDisabled?: boolean
}

export const Search: FC<SearchProps> = ({
  className,
  variant = 'input',
  onChange,
  onKeyDown,
  autoFocus,
  children,
  size = 'medium',
  onSubmit,
  onClean,
  i18n = {
    placeholder: '',
    label: ''
  },
  tag: Tag = 'form',
  onProtectedSubmit,
  submitEmptyOnBlur,
  defaultValue = '',
  searchIcon = 'icon-search',
  isDisabled = false
}) => {
  const elementClasses = useStyles(
    {
      [styles.search]: true,
      [styles[`search--${variant}`]]: variant,
      [styles[`search--${size}`]]: true,
      [styles['search--disabled']]: isDisabled
    },
    className
  )

  const [isClearActive, setClearActive] = useState(!!defaultValue)

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleCleanOnClick = useCallback(() => {
    inputRef.current.value = ''

    setClearActive(false)

    onChange?.()
    onClean?.()

    if (submitEmptyOnBlur) {
      onSubmit?.()
    }
  }, [onChange, onClean, onSubmit, submitEmptyOnBlur])

  const onBlur = useCallback(() => {
    if (inputRef.current.value === '' && submitEmptyOnBlur) {
      onSubmit?.()
    }
  }, [onSubmit, submitEmptyOnBlur])

  // it should be KeyboardEvent<HTMLInputElement> but these event doesn't have value - why? - no idea, I can't figure it out
  const handleOnKeyUp = useCallback((event: any) => {
    const { value } = event.target as { value: string }

    setClearActive(Boolean(value))
  }, [])

  const handleProtectedSubmit = useCallback(() => {
    if (onProtectedSubmit) {
      onProtectedSubmit(inputRef.current.value)
    }
  }, [onProtectedSubmit])

  const handleOnKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && !onSubmit) {
        event.preventDefault()

        handleProtectedSubmit()
      }
    },
    [handleProtectedSubmit, onSubmit]
  )

  const handleSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault()

      if (onSubmit) {
        onSubmit(inputRef.current.value)
      } else {
        onChange?.()
      }
    },
    [onChange, onSubmit]
  )

  useEffect(() => {
    if (autoFocus && variant === 'input') {
      inputRef.current.focus()
    }
  }, [autoFocus, variant])

  return (
    <Tag onSubmit={handleSubmit}>
      <div className={elementClasses}>
        {variant === 'input' && (
          <Fragment>
            {!!(onSubmit || onProtectedSubmit) && searchIcon && (
              <div className={styles['search__icon-button']}>
                <Button
                  data-testid='search-button'
                  variant='icon-transparent'
                  type={onProtectedSubmit ? 'button' : 'submit'}
                  size='input'
                  isDisabled={!isClearActive}
                  onClick={handleProtectedSubmit}
                >
                  <Icon icon={searchIcon} />
                </Button>
              </div>
            )}

            {!(onSubmit || onProtectedSubmit) && searchIcon && (
              <div className={styles.search__icon}>
                <Icon icon={searchIcon} />
              </div>
            )}
          </Fragment>
        )}

        {children && variant === 'button' && (
          <Input
            i18n={i18n}
            name='search'
            type='text'
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus={autoFocus}
          />
        )}

        {variant === 'input' && (
          <input
            autoFocus={autoFocus}
            ref={inputRef}
            className={styles.search__input}
            type='text'
            name='search'
            placeholder={i18n.placeholder}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={handleOnKeyDown}
            onKeyUp={handleOnKeyUp}
            defaultValue={defaultValue}
            data-testid='search-input'
          />
        )}

        {isClearActive && variant === 'input' && (
          <div className={styles.search__clean}>
            <Button
              variant='icon-transparent'
              size='input'
              onClick={handleCleanOnClick}
            >
              <Icon icon='icon-remove' />
            </Button>
          </div>
        )}

        {children && variant === 'button' && children}
      </div>
    </Tag>
  )
}

Search.displayName = 'Search'
