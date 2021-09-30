import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { injectIntl } from 'react-intl'
import { styles } from '@helpers/css'
import Button from '@components/ui/Button'
import Input from '@components/ui/Input'
import PropTypes from 'prop-types'
import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import scss from './Search.scss'

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
  const [isClearActive, setClearActive] = useState(false),
    inputRef = useRef(),
    /**
     * Handle input clean
     * @type {function}
     */
    handleCleanOnClick = useCallback(() => {
      inputRef.current.value = ''
      setClearActive(false)
      onChange()
    }, []),
    /**
     * Handle input keyup
     * @type {function}
     */
    handleOnKeyUp = useCallback(
      event => setClearActive(event.target.value),
      []
    ),
    /**
     * Handle input key down
     * @type {function}
     */
    handleOnKeyDown = useCallback(event => {
      if (event.key === 'Enter' && !onSubmit) {
        event.preventDefault()

        handleProtectedSubmit(inputRef.current.value)
      }
    }, []),
    /**
     * Handle on form submit
     * @type {function}
     */
    handleSubmit = useCallback(event => {
      event.preventDefault()

      if (onSubmit) {
        onSubmit(inputRef.current.value)
      } else {
        onChange()
      }
    }, []),
    /**
     * Handle on form submit
     * @type {function}
     */
    handleProtectedSubmit = useCallback(event => {
      onProtectedSubmit &&
        onProtectedSubmit(inputRef.current.value)
    }, [])

  /**
   * UseEffect
   */
  useEffect(() => {
    autoFocus &&
      variant === 'input' &&
      inputRef.current.focus()
  }, [])

  const elementClasses = cssClass({
    'search--button': variant === 'button',
    'search--input': variant === 'input'
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
                size="input"
                type={
                  onProtectedSubmit ? 'button' : 'submit'
                }
                variant="icon"
              >
                <FontAwesomeIcon icon="search" />
              </Button>
            </div>
          ) : (
            <div className={scss.search__icon}>
              <FontAwesomeIcon icon="search" size="sm" />
            </div>
          ))}

        {children && variant === 'button' && (
          <Input
            autoFocus={autoFocus}
            label={intl.formatMessage({ id: label })}
            name="search"
            onChange={onChange}
            onKeyDown={onKeyDown}
            type="text"
          />
        )}

        {variant === 'input' && (
          <input
            autoFocus={autoFocus}
            className={scss.search__input}
            name="search"
            onChange={onChange}
            onKeyDown={handleOnKeyDown}
            onKeyUp={handleOnKeyUp}
            placeholder={intl.formatMessage({
              id: placeholder
            })}
            ref={inputRef}
            type="text"
          />
        )}

        {isClearActive && variant === 'input' && (
          <div className={scss.search__clean}>
            <Button
              onClick={handleCleanOnClick}
              size="input"
              variant="icon"
            >
              <FontAwesomeIcon icon="times" size="sm" />
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
   * AutoFocus
   */
  autoFocus: PropTypes.bool,

  /**
   * Children elements
   */
  children: PropTypes.node,

  /**
   * Classname, default `search`
   */
  className: PropTypes.string,

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

  onProtectedSubmit: PropTypes.func,

  /**
   * Handle on form submit action
   */
  onSubmit: PropTypes.func,

  /**
   * Placeholder
   */
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   *  Size of search input `small, medium, large`
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Tag, default: 'form'
   */
  tag: PropTypes.string,

  /**
   * Variant
   */
  variant: PropTypes.oneOf(['input', 'button'])
}

/**
 * The default properties.
 * @type {Object}
 */
Search.defaultProps = {
  autoFocus: false,
  children: null,
  className: 'search',
  label: null,
  onChange: () => null,
  onKeyDown: () => null,
  onProtectedSubmit: null,
  onSubmit: null,
  placeholder: 'word.search',
  size: 'medium',
  tag: 'form',
  variant: 'input'
}

export default memo(injectIntl(Search))
