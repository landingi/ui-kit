import Icon from '@components/Icon'
import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Spinner.module.scss'

/**
 * Spinner - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
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
    <div className={elementClasses} data-testid='spinner'>
      <Icon icon='icon-spinner' spin />
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
