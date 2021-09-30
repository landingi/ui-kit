import { FormattedMessage } from 'react-intl'
import { styles } from '@helpers/css'
import Heading from '@components/ui/Heading'
import Image from '@components/ui/Image'
import PropTypes from 'prop-types'
import React from 'react'
import Spacer from '@components/ui/Spacer'
import Vimeo from '@u-wave/react-vimeo'
import scss from './Message.scss'

const cssClass = styles(scss),
  /**
   * Message - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: `message`
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
  message = ({
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
    /**
     * Render multimedia
     * @type {function}
     */
    const renderMultimedia = () => (
      <div>
        <Spacer space="small" />

        {isVideo ? (
          <>
            <Vimeo height={height} video={url} />

            <Spacer space="small" />
          </>
        ) : (
          <Image height={height} size="auto" src={url} />
        )}
      </div>
    )

    return (
      <div className={cssClass(className)}>
        {url &&
          multimediaPosition === 'before' &&
          renderMultimedia()}

        {title && (
          <Heading
            align="center"
            bold={bold}
            level={titleLevel}
            margin={withoutMargin ? 'none' : ''}
          >
            <FormattedMessage
              id={`${title}`}
              values={{
                br: <br />
              }}
            />
          </Heading>
        )}

        {message && (
          <>
            <Spacer space="tiny" />

            <Heading align="center" level={messageLevel}>
              <FormattedMessage
                id={`${message}`}
                values={{
                  br: <br />
                }}
              />
            </Heading>
          </>
        )}

        {url &&
          multimediaPosition === 'after' &&
          renderMultimedia()}

        {children}
      </div>
    )
  }

/**
 * Display name
 * @type {string}
 */
message.displayName = 'Message'

/**
 * The properties.
 * @type {Object}
 */
message.propTypes = {
  /**
   * Bold
   */
  bold: PropTypes.bool,

  /**
   * Children element
   */
  children: PropTypes.node,

  /**
   * Classname, default `message`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),

  /**
   * Image/Video height
   */
  height: PropTypes.number,

  /**
   * Video
   */
  isVideo: PropTypes.bool,

  /**
   * Message elements
   */
  message: PropTypes.string,

  /**
   * Message font size
   */
  messageLevel: PropTypes.number,

  /**
   * MultimediaPosition
   */
  multimediaPosition: PropTypes.oneOf(['before', 'after']),

  /**
   * Title elements
   */
  title: PropTypes.string,

  /**
   * Title font size
   */
  titleLevel: PropTypes.number,

  /**
   * Image/Video url
   */
  url: PropTypes.string,
  /**
   * WithoutMargin
   */
  withoutMargin: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
message.defaultProps = {
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

export default message
