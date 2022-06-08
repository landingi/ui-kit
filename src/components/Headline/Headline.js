import { styles } from '@helpers/css'
import Heading from '@components/Heading'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Headline.scss'

const cssClass = styles(scss)

//TODO Headline css, mdx, test
/**
 * Headline - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: page__headline
 * @param {string} props.title - data
 * @return {object} An object of children element
 */
const Headline = ({ className, title }) => (
  <div className={cssClass(className)}>
    <Heading className='text--truncate' level={1}>
      {title}
    </Heading>
  </div>
)

Headline.displayName = 'Headline'

Headline.defaultProps = {
  className: 'page__headline'
}

Headline.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  title: PropTypes.string.isRequired
}

export default Headline
