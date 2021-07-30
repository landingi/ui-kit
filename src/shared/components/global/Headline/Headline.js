import React from 'react'
import Heading from 'shared/components/ui/Heading'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { styles } from 'shared/helpers/css'
import scss from './Headline.scss'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Headline page - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: page__headline
 * @param {string} props.title - data
 * @return {object} An object of children element
 */
const headline = ({ className, title }) => (
  <div className={cssClass(className)}>
    <Heading className="text--truncate"
level={1}>
      <FormattedMessage id={`${title}`} />
    </Heading>
  </div>
)

/**
 * Display name
 * @type {string}
 */
headline.displayName = 'Headline'

/**
 * The default properties.
 * @type {Object}
 */
headline.defaultProps = {
  className: 'page__headline'
}

/**
 * The properties.
 * @type {Object}
 */
headline.propTypes = {
  /**
   * Classname, default `page__headline`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Title
   * @param {String}
   */
  title: PropTypes.string.isRequired
}

export default headline
