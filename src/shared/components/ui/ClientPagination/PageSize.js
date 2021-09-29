import React from 'react'
import PropTypes from 'prop-types'
import Select from '@components/ui/Select'
import { styles } from '@helpers/css'
import scss from './PageSize.scss'

const cssClass = styles(scss),
  /**
   * Page size dropdown values
   * @return {array}
   */
  pageSizeDropdown = [
    {
      value: 10,
      label: '10'
    },
    {
      value: 25,
      label: '25'
    },
    {
      value: 50,
      label: '50'
    },
    {
      value: 100,
      label: '100'
    }
  ],
  /**
   * Page Size - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: page-size
   * @param {number} props.activePageLimit - active page limit
   * @param {function} props.onChange - on change handler
   * @return {object} An object of children element
   */

  pageSize = ({ className, activePageLimit, onChange }) => (
    <div className={cssClass(className)}>
      <Select
        data={pageSizeDropdown}
        name='setPaginationSize'
        onChange={onChange}
        value={activePageLimit}
      />
    </div>
  )

/**
 * Display name
 * @type {string}
 */
pageSize.displayName = 'Page size'

/**
 * The properties.
 * @type {Object}
 */
pageSize.propTypes = {
  /**
   * Classname, default `per-page`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * ActivePageLimit active page limit
   */
  activePageLimit: PropTypes.number,
  /**
   * Gets called when input changes
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onChange: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
pageSize.defaultProps = {
  className: 'page-size',
  activePageLimit: undefined,
  onChange: () => null
}

export default pageSize
