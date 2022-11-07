import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Dropdown.module.scss'

/**
 * Dropdown Head element - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names
 * @return {object} An object of children element
 */
const DropdownHead = ({ children, className }) => {
  const elementStyles = useStyles(
    {
      [styles.dropdown__head]: true
    },
    className
  )

  return <div className={elementStyles}>{children}</div>
}

DropdownHead.displayName = 'Dropdown Head'

DropdownHead.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

DropdownHead.defaultProps = {
  className: ''
}

export default DropdownHead
