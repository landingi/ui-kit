/* eslint-disable no-undef */
import { FormattedMessage, injectIntl } from 'react-intl'
import Button from '@components/ui/Button'
import PropTypes from 'prop-types'
import React from 'react'

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
        description: intl.formatMessage({
          id: description
        }),
        subject: intl.formatMessage({ id: subject })
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
   * Description
   */
  description: PropTypes.string,

  /**
   * Intl from react-intl
   */
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired
  }).isRequired,

  /**
   * Mail
   */
  mail: PropTypes.string,

  /**
   * Name
   */
  name: PropTypes.string.isRequired,

  /**
   * Size
   */
  size: PropTypes.string,

  /**
   * Subject
   */
  subject: PropTypes.string,

  /**
   * Variant
   */
  variant: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
Fresh.defaultProps = {
  description: 'word.fresh.component.empty.content',
  mail: ' ',
  size: 'medium',
  subject: 'word.fresh.component.empty.content',
  variant: 'primary'
}

export default injectIntl(Fresh)
