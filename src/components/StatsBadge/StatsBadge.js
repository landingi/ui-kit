import Heading from '@components/Heading'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './StatsBadge.module.scss'

/**
 * StatsBadge - stateless presentational component
 * @param {object} props
 * @param {string} props.color
 * @param {number} props.quantity
 * @param {string} props.description
 * @return {object} An object of children element
 */
const StatsBadge = ({ className, color, quantity, description }) => {
  const badgeStyles = useStyles(
    {
      [styles.container]: true,
      [styles[`container--${color}`]]: color
    },
    className
  )
  const descriptionStyles = useStyles({
    [styles['container--description']]: true
  })

  return (
    <div data-testid='badge' className={badgeStyles}>
      <div className={descriptionStyles}>
        <Heading level={2} margin='none'>
          {quantity}
        </Heading>

        <Heading level={5}>{description}</Heading>
      </div>
    </div>
  )
}

StatsBadge.displayName = 'StatsBadge'

StatsBadge.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  color: PropTypes.oneOf(['green', 'yellow', 'pink']),
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number
}

StatsBadge.defaultProps = {
  className: '',
  color: 'green',
  quantity: 0
}

export default StatsBadge
