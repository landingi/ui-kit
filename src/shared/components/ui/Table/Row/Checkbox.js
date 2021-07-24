import React, { forwardRef, useRef, useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Checkbox.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * selectRow - stateless presentational component
 * @param {object} props - props
 * @param {bool} props.indeterminate - indeterminate
 * @param {bool} props.hasSelected - hasSelected
 * @param {string|array} props.className - children
 * @param {string|array|object} props.rest - rest of props
 * @return {object} An object of children element
 */
const selectRow = forwardRef(
  ({ indeterminate, hasSelected, className, ...rest }, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <label className={cssClass('input__checkbox')}>
        <input
type="checkbox"
ref={resolvedRef}
{...rest} />

        <div />
      </label>
    )
  }
)

/**
 * Display name
 * @type {string}
 */
selectRow.displayName = 'Table Checkbox'

/**
 * The properties.
 * @type {Object}
 */
selectRow.propTypes = {
  /**
   * Indeterminate
   */
  indeterminate: PropTypes.bool.isRequired,
  /**
   * hasSelected
   */
  hasSelected: PropTypes.bool,
  /**
   * Classname, default `input__checkbox`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

/**
 * The default properties.
 * @type {Object}
 */
selectRow.defaultProps = {
  hasSelected: false,
  className: 'input__checkbox'
}
export default memo(selectRow)
