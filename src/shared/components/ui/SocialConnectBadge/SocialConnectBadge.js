import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './SocialConnectBadge.scss'
import Button from 'shared/components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Social connect badge - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `social-connect-badge`
 * @param {string} props.variant - variant of socialConnectBadge connect, disconnect
 * @param {string} props.social - social of socialConnectBadge google, facebook
 * @return {object} An object of children element
 */
const socialConnectBadge = ({
  className,
  variant,
  social
}) => (
  <div
    className={cssClass(
      className,
      `social-connect-badge-${social}--${variant}`
    )}
  >
    <Button hasIcon
size="medium">
      <FontAwesomeIcon icon={['fab', `${social}`]} />

      <span>
        {variant === 'connect' ? (
          <FormattedMessage id="word.connect" />
        ) : (
          <FormattedMessage id="word.disconnect" />
        )}

        <span>{social}</span>

        <FormattedMessage id="word.account" />
      </span>
    </Button>
  </div>
)

/**
 * Display name
 * @type {string}
 */
socialConnectBadge.displayName = 'Social connect badge'

/**
 * The properties.
 * @type {Object}
 */
socialConnectBadge.propTypes = {
  /**
   * Classname, default `socialConnectBadge`
   */
  className: PropTypes.string,
  /**
   * Variant
   */
  variant: PropTypes.oneOf(['connect', 'disconnect'])
    .isRequired,
  /**
   * Social
   */
  social: PropTypes.oneOf(['google', 'facebook']).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
socialConnectBadge.defaultProps = {
  className: 'social-connect-badge'
}

export default socialConnectBadge
