import { styles } from '@helpers/css'
import Html from 'shared/components/global/Html'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Toggle.scss'

const cssClass = styles(scss),
  /**
   * Toggle - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: ''
   * @param {string} props.name - name
   * @param {bool} props.checked - checked
   * @param {func} props.onChange - onChange
   * @param {func} props.onBlur - onBlur
   * @param {string} props.id - id
   * @param {string} props.label - label, default: ''
   * @param {bool} props.disabled - disabled, default: false
   * @return {object} An object of children element
   */
  toggle = ({
    name,
    checked,
    onChange,
    onBlur,
    id,
    label,
    className,
    disabled
  }) => {
    const getDisabledClassName = () =>
      checked
        ? 'toggle--checked-disabled'
        : 'toggle--disabled'

    return (
      <div
        className={cssClass('toggle-container', className)}
      >
        <label
          className={cssClass('toggle', {
            'toggle--checked': checked,
            [getDisabledClassName()]: disabled
          })}
        >
          <input
            checked={checked}
            className={cssClass('toggle__checkbox')}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            type="checkbox"
          />

          <span className={cssClass('toggle__button')} />
        </label>

        {label && (
          <label htmlFor={id}>
            <Html value={label} />
          </label>
        )}
      </div>
    )
  }

/**
 * Display name
 * @type {string}
 */
toggle.displayName = 'Toggle'

/**
 * The properties.
 * @type {Object}
 */
toggle.propTypes = {
  checked: PropTypes.bool.isRequired,
  /**
   * Classname, default ''
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf
  ]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
toggle.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  onBlur: () => null
}

export { toggle as Toggle }
