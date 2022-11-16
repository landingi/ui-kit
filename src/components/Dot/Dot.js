import Spreader from '@components/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'
import { Row } from 'simple-flexbox'

import styles from './Dot.module.scss'

/**
 * Dot - stateless ui component
 * @param {string} props.variant - dot color
 * @param {string} props.label - optional label
 * @param {string | array} props.className - additional styles
 * @return {object} An object of children element
 */
const Dot = ({ variant, label, className }) => {
  const wrapperStyles = useStyles({}, className)

  const dotStyles = useStyles({
    [styles.dot]: true,
    [styles[`dot--${variant}`]]: true
  })

  return (
    <Row alignItems='center' className={wrapperStyles}>
      <div className={dotStyles} />

      <Spreader spread='tiny' />

      {label ? <span>{label}</span> : null}
    </Row>
  )
}

Dot.displayName = 'Dot'

Dot.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  variant: PropTypes.oneOf([
    'brand',
    'alert',
    'warning',
    'success',
    'info',
    'pending',
    'accent-1',
    'accent-2',
    'accent-3',
    'accent-4',
    'accent-5',
    'accent-6',
    'accent-7'
  ]),
  label: PropTypes.string
}

Dot.defaultProps = {
  className: '',
  variant: 'brand',
  label: null
}

export default Dot
