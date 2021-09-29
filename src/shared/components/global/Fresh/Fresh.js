/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl } from 'react-intl'
import Button from '@components/ui/Button'

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
function Fresh({
  name,
  mail,
  subject,
  description,
  variant,
  size,
  intl
}) {
  const isFreshChat = Boolean(window.fcWidget),
    isFreshDesk = Boolean(window.FreshworksWidget),
    /**
     * Open mail
     * @type {function}
     */
    handleLimitExceededMail = () =>
      `mailto:${mail}?subject=${intl.formatMessage({
        id: subject
      })}&body=${intl.formatMessage({ id: description })}`,
    /**
     * Open FreshChat
     * @type {function}
     */
    openFreshChat = () =>
      window.fcWidget.open({
        replyText: intl.formatMessage({ id: description })
      }),
    /**
     * Open FreshDesk
     * @type {function}
     */
    openFreshDesk = () => {
      FreshworksWidget('open')
      FreshworksWidget('prefill', 'ticketForm', {
        subject: intl.formatMessage({ id: subject }),
        description: intl.formatMessage({ id: description })
      })
    }

  return isFreshChat || isFreshDesk ? (
    <Button
      onClick={isFreshChat ? openFreshChat : openFreshDesk}
      size={size}
      variant={variant}
    >
      <FormattedMessage id={name} />
    </Button>
  ) : (
    <Button
      buttonStyle
      href={handleLimitExceededMail()}
      size={size}
      tag='a'
      target='_blank'
      variant={variant}
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
