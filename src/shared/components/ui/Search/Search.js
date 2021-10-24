import React, { memo, useState, useEffect, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import scss from './Search.scss'
import Input from '@components/ui/Input'
import Button from '@components/ui/Button'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

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
 * @param {object} props.i18n - translations
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

  const elementClasses = cssClass({
    'search--input': variant === 'input',
    'search--button': variant === 'button'
  })

  return (
    <Tag onSubmit={handleSubmit}>
      <div className={cssClass(className, elementClasses, `search--${size}`)}>
        {variant === 'input' &&
          (onSubmit || onProtectedSubmit ? (
            <div className={scss.search__icon_button}>
              <Button
                variant='icon'
                type={onProtectedSubmit ? 'button' : 'submit'}
                size='input'
                isDisabled={!isClearActive}
                onClick={handleProtectedSubmit}
              >
                <FontAwesomeIcon icon='search' />
              </Button>
            </div>
          ) : (
            <div className={scss.search__icon}>
              <FontAwesomeIcon size='sm' icon='search' />
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
            className={scss.search__input}
            type='text'
            name='search'
            placeholder={i18n.placeholder}
            onChange={onChange}
            onKeyDown={handleOnKeyDown}
            onKeyUp={handleOnKeyUp}
          />
        )}

        {isClearActive && variant === 'input' && (
          <div className={scss.search__clean}>
            <Button variant='icon' size='input' onClick={handleCleanOnClick}>
              <FontAwesomeIcon size='sm' icon='times' />
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
  /**
   * ClassName, default `search`
   */
  className: PropTypes.string,
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * Gets called when input changes
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onChange: PropTypes.func,
  /**
   * Gets called when input changes
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onKeyDown: PropTypes.func,
  /**
   *  size of search input `small, medium, large`
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * AutoFocus
   */
  autoFocus: PropTypes.bool,
  /**
   * Variant
   */
  variant: PropTypes.oneOf(['input', 'button']),
  /**
   * i18n
   */
  i18n: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * handle on form submit action
   */
  onSubmit: PropTypes.func,
  /**
   * Tag, default: 'form'
   */
  tag: PropTypes.string,
  onProtectedSubmit: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
Search.defaultProps = {
  className: 'search',
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

export default memo(Search)
