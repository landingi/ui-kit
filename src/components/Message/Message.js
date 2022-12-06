import { Heading } from '@components/Heading'
import Image from '@components/Image'
import { Spacer } from '@components/Spacer'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import styles from './Message.module.scss'

// TODO Message mdx
/**
 * Message - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children element
 * @param {string|array} props.className - list of custom class names out of component
 * @param {string} props.title - title
 * @param {string} props.message - message
 * @param {string} props.url - image/video url
 * @param {number} props.height - height of image/video
 * @param {number} props.titleLevel - title font size
 * @param {number} props.messageLevel - message font size
 * @param {bool} props.video - component with wideo
 * @param {string} props.multimediaPosition - image/video position before or after content, default `before`
 * @param {bool} props.bold - message title is bold
 * @param {bool} props.withoutMargin - message title without bottom margin
 * @return {object} An object of children element
 */
const Message = ({
  children,
  className,
  title,
  message,
  url,
  height,
  titleLevel,
  messageLevel,
  video,
  multimediaPosition,
  bold,
  withoutMargin
}) => {
  const elementClasses = useStyles(
    {
      [styles.message]: true
    },
    className
  )
  /**
   * Render multimedia
   * @type {function}
   */
  const renderMultimedia = () => (
    <div>
      <Spacer space='small' />

      {video ? (
        <Fragment>
          {video}

          <Spacer space='small' />
        </Fragment>
      ) : (
        <Image height={height} size='auto' src={url} />
      )}
    </div>
  )

  return (
    <div className={elementClasses}>
      {url && multimediaPosition === 'before' && renderMultimedia()}

      {title && (
        <Heading
          align='center'
          bold={bold}
          level={titleLevel}
          margin={withoutMargin ? 'none' : ''}
        >
          {title}
        </Heading>
      )}

      {message && (
        <Fragment>
          <Spacer space='tiny' />

          <Heading align='center' level={messageLevel}>
            {message}
          </Heading>
        </Fragment>
      )}

      {url && multimediaPosition === 'after' && renderMultimedia()}

      {children}
    </div>
  )
}

Message.displayName = 'Message'

Message.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  height: PropTypes.number,
  video: PropTypes.node,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  messageLevel: PropTypes.number,
  multimediaPosition: PropTypes.oneOf(['before', 'after']),
  title: PropTypes.string,
  titleLevel: PropTypes.number,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  withoutMargin: PropTypes.bool
}

Message.defaultProps = {
  className: '',
  bold: false,
  children: null,
  height: 220,
  video: null,
  message: undefined,
  messageLevel: 3,
  multimediaPosition: 'before',
  title: undefined,
  titleLevel: 1,
  url: undefined,
  withoutMargin: false
}

export default Message
