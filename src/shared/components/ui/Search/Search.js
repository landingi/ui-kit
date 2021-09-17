import React, {
  memo,
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import scss from './Search.scss'
import Input from '@components/ui/Input'
import Button from '@components/ui/Button'
import { injectIntl } from 'react-intl'

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
 * @param {string|object} props.placeholder - placeholder
 * @param {string} props.tag - tag
 * @param {func} props.intl - intl
 * @param {func} props.onProtectedSubmit - submit triggered by enter/button but event is immidiately stopped, useful for searchers in forms
 * @return {object} An object of children element
 */
function Search({
  className,
  variant,
  onChange,
  onKeyDown,
  autoFocus,
  children,
  size,
  label,
  onSubmit,
  placeholder,
  tag: Tag,
  intl,
  onProtectedSubmit
}) {
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
  const handleProtectedSubmit = useCallback(event => {
    onProtectedSubmit &&
      onProtectedSubmit(inputRef.current.value)
  }, [])

  /**
   * useEffect
   */
  useEffect(() => {
    autoFocus &&
      variant === 'input' &&
      inputRef.current.focus()
  }, [])

  const elementClasses = cssClass({
    'search--input': variant === 'input',
    'search--button': variant === 'button'
  })

  return (
    <Tag onSubmit={handleSubmit}>
      <div
        className={cssClass(
          className,
          elementClasses,
          `search--${size}`
        )}
      >
        {variant === 'input' &&
          (onSubmit || onProtectedSubmit ? (
            <div className={scss.search__icon_button}>
              <Button
                isDisabled={!isClearActive}
                onClick={handleProtectedSubmit}
                size='input'
                type={
                  onProtectedSubmit ? 'button' : 'submit'
                }
                variant='icon'
              >
                <FontAwesomeIcon icon='search' />
              </Button>
            </div>
          ) : (
            <div className={scss.search__icon}>
              <FontAwesomeIcon icon='search' size='sm' />
            </div>
          ))}

        {children && variant === 'button' && (
          <Input
            autoFocus={autoFocus}
            label={intl.formatMessage({ id: label })}
            name='search'
            onChange={onChange}
            onKeyDown={onKeyDown}
            type='text'
          />
        )}

        {variant === 'input' && (
          <input
            autoFocus={autoFocus}
            className={scss.search__input}
            name='search'
            onChange={onChange}
            onKeyDown={handleOnKeyDown}
            onKeyUp={handleOnKeyUp}
            placeholder={intl.formatMessage({
              id: placeholder
            })}
            ref={inputRef}
            type='text'
          />
        )}

        {isClearActive && variant === 'input' && (
          <div className={scss.search__clean}>
            <Button
              onClick={handleCleanOnClick}
              size='input'
              variant='icon'
            >
              <FontAwesomeIcon icon='times' size='sm' />
            </Button>
          </div>
        )}

        {children && variant === 'button' && children}
      </div>
    </Tag>
  )
}

/**
 * Display name
 * @type {string}
 */
Search.displayName = 'Search'

/**
 * The properties.
 * @type {Object}
 */
Search.propTypes = {
  /**
   * Classname, default `search`
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
   * Intl from react-intl
   */
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,
  /**
   * Label
   */
  label: PropTypes.string,
  /**
   * Placeholder
   */
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
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
  size: 'medium',
  autoFocus: false,
  onChange: () => null,
  onKeyDown: () => null,
  children: null,
  variant: 'input',
  label: null,
  placeholder: 'word.search',
  onSubmit: null,
  tag: 'form',
  onProtectedSubmit: null
}

export default memo(injectIntl(Search))
