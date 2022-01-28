import Icon from '@components/ui/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Spinner.module.scss'

/**
 * Spinner - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `spinner__spin`
 * @return {object} An object of children element
 */
const Spinner = ({ className }) => {
  const elementClasses = useStyles(
    {
      [styles['spinner']]: true
    },
    className
  )

  return (
    <div className={elementClasses}>
      <Icon icon='icon-spinner' />
    </div>
  )
}

Spinner.displayName = 'Spinner'

Spinner.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

Spinner.defaultProps = {
  className: ''
}

export default Spinner
