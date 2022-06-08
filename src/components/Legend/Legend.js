import React from 'react'
import PropTypes from 'prop-types'
import { legendShape } from '@shapes'
import ColorLine from '@components/ColorLine'
import uuid from 'react-uuid'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Legend.module.scss'

//TODO Legend test
/**
 * Legend - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {object[]} props.data - data
 * @param {string} props.alignment - alignment
 * @return {object} An object of children element
 */
const Legend = ({ className, data, alignment }) => {
  const wrapperClasses = useStyles(
    {
      [styles['container']]: true,
      [styles[`container--${alignment}`]]: alignment
    },
    className
  )

  const elementClasses = variant =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useStyles({
      [styles['legend']]: true,
      [styles[`legend--${variant}`]]: variant
    })

  return (
    <div className={wrapperClasses}>
      {data.map(({ variant, range }) => (
        <span key={uuid()} className={elementClasses(variant)}>
          <ColorLine variant={variant} alignment='horizontal' />
          {range}
        </span>
      ))}
    </div>
  )
}

Legend.displayName = 'Legend'

Legend.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  alignment: PropTypes.oneOf(['vertical', 'horizontal']),
  data: PropTypes.arrayOf(legendShape).isRequired
}

Legend.defaultProps = {
  className: '',
  alignment: 'vertical'
}

export default Legend
