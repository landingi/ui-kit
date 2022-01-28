import Heading from '@components/ui/Heading'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './StatsBadge.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * StatsBadge - stateless presentational component
 * @param {object} props
 * @param {string} props.color
 * @param {number} props.quantity
 * @param {string} props.description
 * @return {object} An object of children element
 */
const StatsBadge = ({ color, quantity, description }) => {
  const badgeStyles = useStyles({
    [styles['container']]: true,
    [styles[`container--${color}`]]: color
  })
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
  color: PropTypes.oneOf(['green', 'yellow', 'pink']),
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number
}

StatsBadge.defaultProps = {
  color: 'green',
  quantity: 0
}

export default StatsBadge
