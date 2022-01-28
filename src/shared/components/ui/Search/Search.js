import React, { useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import Input from '@components/ui/Input'
import Button from '@components/ui/Button'
import Icon from '@components/ui/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Search.module.scss'

/**
 * Search - stateful presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `search`
 * @param {string} props.variant - variant input or button action default: `input`
 * @param {func} props.onChange - change handler
 * @param {func} props.onKeyDown - key click handler
 * @param {bool} props.autoFocus - autofocus
 * @param {object} props.children - children
 * @param {string} props.size - size of search field `small, medium, large`
 * @param {string} props.label - input label
 * @param {func} props.onSubmit - handle action on form submit
 * @param {object} props.i18n - object of translations
 * @param {string} props.tag - tag
 * @param {func} props.onProtectedSubmit - submit triggered by enter/button but event is immidiately stopped, useful for searchers in forms
 * @return {object} An object of children element
 */
const Search = ({
  className,
  variant,
  onChange,
  onKeyDown,
  autoFocus,
  children,
  size,
  onSubmit,
  i18n,
  tag: Tag,
  onProtectedSubmit
}) => {
  const [isClearActive, setClearActive] = useState(false)

  const inputRef = useRef()

  /**
   * Handle input clean
   * @type {function}
   */
  const handleCleanOnClick = useCallback(() => {
    inputRef.current.value = ''

    setClearActive(false)
    onChange()
  }, [])

  /**
   * Handle input keyup
   * @type {function}
   */
  const handleOnKeyUp = useCallback(
    event => setClearActive(event.target.value),
    []
  )

  /**
   * Handle input key down
   * @type {function}
   */
  const handleOnKeyDown = useCallback(event => {
    if (event.key === 'Enter' && !onSubmit) {
      event.preventDefault()

      handleProtectedSubmit(inputRef.current.value)
    }
  }, [])

  /**
   * Handle on form submit
   * @type {function}
   */
  const handleSubmit = useCallback(event => {
    event.preventDefault()

    if (onSubmit) {
      onSubmit(inputRef.current.value)
    } else {
      onChange()
    }
  }, [])

  /**
   * Handle on form submit
   * @type {function}
   */
  const handleProtectedSubmit = useCallback(() => {
    onProtectedSubmit && onProtectedSubmit(inputRef.current.value)
  }, [])

  /**
   * useEffect
   */
  useEffect(() => {
    autoFocus && variant === 'input' && inputRef.current.focus()
  }, [])

  const elementClasses = useStyles(
    {
      [styles.search]: true,
      [styles['search--input']]: variant === 'input',
      [styles['search--button']]: variant === 'button',
      [styles[`search--${size}`]]: true
    },
    className
  )

  return (
    <Tag onSubmit={handleSubmit}>
      <div className={elementClasses}>
        {variant === 'input' &&
          (onSubmit || onProtectedSubmit ? (
            <div className={styles.search__icon_button}>
              <Button
                variant='icon-transparent'
                type={onProtectedSubmit ? 'button' : 'submit'}
                size='input'
                isDisabled={!isClearActive}
                onClick={handleProtectedSubmit}
              >
                <Icon icon='icon-search' />
              </Button>
            </div>
          ) : (
            <div className={styles.search__icon}>
              <Icon icon='icon-search' />
            </div>
          ))}

        {children && variant === 'button' && (
          <Input
            label={i18n.label}
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
            onKeyDown={handleOnKeyDown}
            onKeyUp={handleOnKeyUp}
          />
        )}

        {isClearActive && variant === 'input' && (
          <div className={styles.search__clean}>
            <Button
              variant='icon-transparent'
              size='input'
              onClick={handleCleanOnClick}
            >
              <Icon icon='times' />
            </Button>
          </div>
        )}

        {children && variant === 'button' && children}
      </div>
    </Tag>
  )
}

Search.displayName = 'Search'

Search.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  autoFocus: PropTypes.bool,
  variant: PropTypes.oneOf(['input', 'button']),
  i18n: PropTypes.shape({
    placeholder: PropTypes.string,
    label: PropTypes.string
  }),
  onSubmit: PropTypes.func,
  tag: PropTypes.string,
  onProtectedSubmit: PropTypes.func
}

Search.defaultProps = {
  className: '',
  tag: 'form',
  size: 'medium',
  children: null,
  variant: 'input',
  i18n: {
    placeholder: null,
    label: null
  },
  onSubmit: null,
  onProtectedSubmit: null,
  autoFocus: false,
  onChange: () => null,
  onKeyDown: () => null
}

export default Search
