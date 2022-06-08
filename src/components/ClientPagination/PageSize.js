import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import Select from '@components/Select'
import scss from './PageSize.scss'

// TODO PageSize css, mdx, tests

const cssClass = styles(scss)

/**
 * Page size dropdown values
 * @return {array}
 */
const pageSizeDropdown = [
  {
    label: '10',
    value: 10
  },
  {
    label: '25',
    value: 25
  },
  {
    label: '50',
    value: 50
  },
  {
    label: '100',
    value: 100
  }
]

/**
 * Page Size - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: page-size
 * @param {number} props.activePageLimit - active page limit
 * @param {function} props.onChange - on change handler
 * @return {object} An object of children element
 */
const pageSize = ({ className, activePageLimit, onChange }) => (
  <div className={cssClass(className)}>
    <Select
      data={pageSizeDropdown}
      name='setPaginationSize'
      onChange={onChange}
      value={activePageLimit}
    />
  </div>
)

pageSize.displayName = 'Page size'

pageSize.propTypes = {
  activePageLimit: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func
}

pageSize.defaultProps = {
  activePageLimit: undefined,
  className: 'page-size',
  onChange: () => null
}

export default pageSize
