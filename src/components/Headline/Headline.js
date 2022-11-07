import Heading from '@components/Heading'
import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Headline.module.scss'

/**
 * Headline - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names out of component
 * @param {string} props.title - data
 * @return {object} An object of children element
 */
const Headline = ({ className, title }) => {
  const headlineClasses = useStyles(
    {
      [styles.page__headline]: true
    },
    className
  )

  return (
    <div data-testid='headline' className={headlineClasses}>
      <Heading className='text--truncate' level={1}>
        {title}
      </Heading>
    </div>
  )
}

Headline.displayName = 'Headline'

Headline.defaultProps = {
  className: 'page__headline'
}

Headline.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  title: PropTypes.string.isRequired
}

export default Headline
