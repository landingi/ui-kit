import Heading from '@components/ui/Heading'
import Image from '@components/ui/Image'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Spacer from '@components/ui/Spacer'
import Vimeo from '@u-wave/react-vimeo'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Message.module.scss'

/**
 * Message - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of custom class names out of component
 * @param {string} props.title - title
 * @param {string} props.message - message
 * @param {string} props.url - image/video url
 * @param {number} props.height - height of image/video
 * @param {object} props.children - children element
 * @param {number} props.titleLevel - title font size
 * @param {number} props.messageLevel - message font size
 * @param {bool} props.isVideo - video, default false
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
  isVideo,
  multimediaPosition,
  bold,
  withoutMargin
}) => {
  const elementClasses = useStyles(
    {
      [styles['message']]: true
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

      {isVideo ? (
        <Fragment>
          <Vimeo height={height} video={url} />

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
        <>
          <Spacer space='tiny' />

          <Heading align='center' level={messageLevel}>
            {message}
          </Heading>
        </>
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
  isVideo: PropTypes.bool,
  message: PropTypes.string,
  messageLevel: PropTypes.number,
  multimediaPosition: PropTypes.oneOf(['before', 'after']),
  title: PropTypes.string,
  titleLevel: PropTypes.number,
  url: PropTypes.string,
  withoutMargin: PropTypes.bool
}

Message.defaultProps = {
  bold: false,
  children: null,
  className: 'message',
  height: 220,
  isVideo: false,
  message: undefined,
  messageLevel: 3,
  multimediaPosition: 'before',
  title: undefined,
  titleLevel: 1,
  url: undefined,
  withoutMargin: false
}

export default Message
