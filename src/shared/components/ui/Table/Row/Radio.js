import React, { forwardRef, useRef, memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Radio.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * selectRow - stateless presentational component
 * @param {object} props - props
 * @param {bool} props.indeterminate - indeterminate
 * @param {string|array|object} props.rest - rest of props
 * @return {object} An object of children element
 */
const selectRow = forwardRef(
  ({
    indeterminate,
    ...rest
  }, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <label className={cssClass('input__radio')}>
        <input
          type="radio"
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
selectRow.displayName = 'Table Radio'

/**
 * The properties.
 * @type {Object}
 */
selectRow.propTypes = {
  /**
   * indeterminate
   */
  indeterminate: PropTypes.bool.isRequired
}

export default memo(selectRow)
