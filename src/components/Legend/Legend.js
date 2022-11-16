import ColorLine from '@components/ColorLine'
import { useStyles } from '@helpers/hooks/useStyles'
import { legendShape } from '@shapes'
import PropTypes from 'prop-types'
import React from 'react'
import uuid from 'react-uuid'

import styles from './Legend.module.scss'

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
      [styles.container]: true,
      [styles[`container--${alignment}`]]: alignment
    },
    className
  )

  const elementClasses = useStyles({
    [styles.legend]: true
  })

  return (
    <div data-testid='legend-container' className={wrapperClasses}>
      {data.map(({ variant, range }) => (
        <span data-testid='legend' key={uuid()} className={elementClasses}>
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
