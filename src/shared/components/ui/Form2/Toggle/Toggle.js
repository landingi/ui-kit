import React from 'react'
import PropTypes from 'prop-types'
import Html from 'shared/components/global/Html'
import { styles } from 'shared/helpers/css'
import scss from './Toggle.scss'

const cssClass = styles(scss)

/**
 * toggle - stateless presentational component
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
const toggle = ({
  name,
  checked,
  onChange,
  onBlur,
  id,
  label,
  className,
  disabled
}) => {
  const getDisabledClassName = () => checked ? 'toggle--checked-disabled' : 'toggle--disabled'

  return (
    <div className={cssClass('toggle-container', className)}>
      <label
        className={cssClass('toggle', { 'toggle--checked': checked, [getDisabledClassName()]: disabled })}
      >
        <input
          name={name}
          className={cssClass('toggle__checkbox')}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          type='checkbox'
          id={id}
          disabled={disabled}
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
  /**
   * Classname, default ''
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf
  ]),
  disabled: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
toggle.defaultProps = {
  className: '',
  label: '',
  onBlur: () => null,
  disabled: false
}

export { toggle as Toggle }
