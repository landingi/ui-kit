import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import { isPublishedOnTestDomain } from 'shared/helpers/isPublishedOnTestDomain'
import scss from './TestDomainIcon.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'
import Tooltip from 'shared/components/ui/Tooltip'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Test Domain Icon - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `test-domain-icon`
 * @param {string} props.domain - domain name
 * @param {bool} props.isPublished - domain status
 */
const testDomainIcon = ({
  className,
  domain,
  isPublished
}) => {
  return (
    isPublishedOnTestDomain(isPublished, domain) &&
      <Tooltip
        content={<FormattedMessage id='list.domains.tip.testdomain' />}
        placement='top'
        align='center'>
        <div className={cssClass(className)}>
          <FontAwesomeIcon icon='exclamation' />
        </div>
      </Tooltip>
  )
}

/**
 * Display name
 * @type {string}
 */
testDomainIcon.displayName = 'Test Domain Icon'

/**
 * The properties.
 * @type {Object}
 */
testDomainIcon.propTypes = {
  /**
   * Classname, default `test-domain-icon`
   */
  className: PropTypes.string,
  /**
   * Domain
   */
  domain: PropTypes.string,
  /**
   * isPublished
   */
  isPublished: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
testDomainIcon.defaultProps = {
  className: 'test-domain-icon',
  isPublished: false
}

export default testDomainIcon
