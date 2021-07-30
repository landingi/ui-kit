import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './BlockSection.scss'
import { FormattedMessage } from 'react-intl'
import Panel from 'shared/components/ui/Panel'
import Heading from 'shared/components/ui/Heading'
import Paragraph from 'shared/components/ui/Paragraph'
import Image from 'shared/components/ui/Image'
import Button from 'shared/components/ui/Button'
import Spacer from 'shared/components/ui/Spacer'
import List from 'shared/components/ui/List'
import ListItem from 'shared/components/ui/List/Item'
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
const BlockSection = ({
  className,
  title,
  message,
  button,
  onClick,
  url,
  reverse,
  list
}) => {
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
            <Heading level={2} bold>
              <FormattedMessage id={`${title}`} />
            </Heading>

            <Paragraph
              line={20}
              weight={400}
              padding={list ? 'none' : 'medium'}
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
                  <ListItem variant="block" key={uuid()}>
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

          <Image src={url} size={527} />
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
