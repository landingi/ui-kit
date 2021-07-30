/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl } from 'react-intl'
import Button from 'shared/components/ui/Button'

/**
 * Fresh - stateless presentational component
 * @param {object} props - props
 * @param {string} props.name - button name
 * @param {string} props.mail - target mail
 * @param {string} props.subject - the title of the topic
 * @param {string} props.description - the content of the topic
 * @param {string} props.variant - button variant
 * @param {string} props.size - button size
 * @param {object} props.intl - react intl formatMessage function
 * @return {object} An object of children element
 */
const Fresh = ({
  name,
  mail,
  subject,
  description,
  variant,
  size,
  intl
}) => {
  const isFreshChat = !!window.fcWidget
  const isFreshDesk = !!window.FreshworksWidget

  /**
   * open mail
   * @type {function}
   */
  const handleLimitExceededMail = () =>
    `mailto:${mail}?subject=${intl.formatMessage({
      id: subject
    })}&body=${intl.formatMessage({ id: description })}`

  /**
   * open FreshChat
   * @type {function}
   */
  const openFreshChat = () =>
    window.fcWidget.open({
      replyText: intl.formatMessage({ id: description })
    })

  /**
   * open FreshDesk
   * @type {function}
   */
  const openFreshDesk = () => {
    FreshworksWidget('open')
    FreshworksWidget('prefill', 'ticketForm', {
      subject: intl.formatMessage({ id: subject }),
      description: intl.formatMessage({ id: description })
    })
  }

  return isFreshChat || isFreshDesk ? (
    <Button
      onClick={isFreshChat ? openFreshChat : openFreshDesk}
      variant={variant}
      size={size}
    >
      <FormattedMessage id={name} />
    </Button>
  ) : (
    <Button
      tag="a"
      href={handleLimitExceededMail()}
      target="_blank"
      variant={variant}
      size={size}
      buttonStyle
    >
      <FormattedMessage id={name} />
    </Button>
  )
}

/**
 * Display name
 * @type {string}
 */
Fresh.displayName = 'Fresh'

/**
 * The properties.
 * @type {Object}
 */
Fresh.propTypes = {
  /**
   * Name
   */
  name: PropTypes.string.isRequired,
  /**
   * Mail
   */
  mail: PropTypes.string,
  /**
   * Subject
   */
  subject: PropTypes.string,
  /**
   * Description
   */
  description: PropTypes.string,
  /**
   * Variant
   */
  variant: PropTypes.string,
  /**
   * Size
   */
  size: PropTypes.string,
  /**
   * Intl from react-intl
   */
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
Fresh.defaultProps = {
  mail: ' ',
  subject: 'word.fresh.component.empty.content',
  description: 'word.fresh.component.empty.content',
  variant: 'primary',
  size: 'medium'
}

export default injectIntl(Fresh)
