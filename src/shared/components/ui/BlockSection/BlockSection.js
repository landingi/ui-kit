import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './BlockSection.scss'
import { FormattedMessage } from 'react-intl'
import Panel from '@components/ui/Panel'
import Heading from '@components/ui/Heading'
import Paragraph from '@components/ui/Paragraph'
import Image from '@components/ui/Image'
import Button from '@components/ui/Button'
import Spacer from '@components/ui/Spacer'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'
import uuid from 'react-uuid'

const cssClass = styles(scss)

/**
 * Block Section - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `block-section`
 * @param {string} props.title - title
 * @param {string} props.message - message
 * @param {string} props.button - button title
 * @param {func} props.onClick - button action
 * @param {string} props.url - image url
 * @param {bool} props.reverse - column reverse
 * @param {array} props.list - list
 * @return {object} An object of children element
 */
function BlockSection({
  className,
  title,
  message,
  button,
  onClick,
  url,
  reverse,
  list
}) {
  const elementClasses = cssClass({
    'block-section__panel--reverse': reverse === true
  })

  return (
    <div className={cssClass(className)}>
      <Panel variant="padding-none">
        <div
          className={cssClass(
            'block-section__panel',
            elementClasses
          )}
        >
          <div
            className={cssClass(
              'block-section__panel--content'
            )}
          >
            <Heading bold level={2}>
              <FormattedMessage id={`${title}`} />
            </Heading>

            <Paragraph
              line={20}
              padding={list ? 'none' : 'medium'}
              weight={400}
            >
              <FormattedMessage
                id={message}
                values={{
                  br: <br />
                }}
              />
            </Paragraph>

            {list && (
              <List listStyle="ordered-disc">
                {list.map(item => (
                  <ListItem key={uuid()} variant="block">
                    <FormattedMessage id={item} />
                  </ListItem>
                ))}
              </List>
            )}

            <Spacer space={list ? 'medium' : 'small'} />

            <Button onClick={onClick}>
              <FormattedMessage id={button} />
            </Button>
          </div>

          <Image size={527} src={url} />
        </div>
      </Panel>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
BlockSection.displayName = 'Block Section'

/**
 * The properties.
 * @type {Object}
 */
BlockSection.propTypes = {
  /**
   * Classname, default `block-section`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Title
   */
  title: PropTypes.string.isRequired,
  /**
   * Message
   */
  message: PropTypes.string.isRequired,
  /**
   * Button title
   */
  button: PropTypes.string.isRequired,
  /**
   * OnClick is button action
   */
  onClick: PropTypes.func,
  /**
   * Url image
   */
  url: PropTypes.string.isRequired,
  /**
   * Reverse column
   */
  reverse: PropTypes.bool,
  /**
   * List
   */
  list: PropTypes.arrayOf(PropTypes.string)
}

/**
 * The default properties.
 * @type {Object}
 */
BlockSection.defaultProps = {
  className: 'block-section',
  reverse: false,
  onClick: () => null,
  list: null
}

export default BlockSection
