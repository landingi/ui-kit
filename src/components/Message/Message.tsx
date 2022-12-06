import { Heading } from '@components/Heading'
import Image from '@components/Image'
import { Spacer } from '@components/Spacer'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, Fragment, ReactNode } from 'react'

import styles from './Message.module.scss'

interface MessageProps {
  children?: ReactNode
  className?: string | string[]
  title?: string
  message?: string
  url?: string
  height?: number
  titleLevel?: 1 | 2 | 3 | 4 | 5 | 6 | 'large'
  messageLevel?: 1 | 2 | 3 | 4 | 5 | 6 | 'large'
  video?: ReactNode
  multimediaPosition?: 'before' | 'after'
  bold?: boolean
  withoutMargin?: boolean
}

export const Message: FC<MessageProps> = ({
  children = null,
  className = '',
  title = undefined,
  message = undefined,
  url = undefined,
  height = 220,
  titleLevel = 1,
  messageLevel = 3,
  video = null,
  multimediaPosition = 'before',
  bold = false,
  withoutMargin = false
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

      {video && (
        <Fragment>
          {video}

          <Spacer space='small' />
        </Fragment>
      )}

      {!video && url && <Image height={height} src={url} auto />}
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
          margin={withoutMargin ? 'none' : undefined}
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

export default Message
