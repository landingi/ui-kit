import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './InfoSection.scss'
import { FormattedMessage } from 'react-intl'
import List from 'shared/components/ui/List'
import ListItem from 'shared/components/ui/List/Item'
import Heading from 'shared/components/ui/Heading'
import Paragraph from 'shared/components/ui/Paragraph'
import Image from 'shared/components/ui/Image'
import Spacer from 'shared/components/ui/Spacer'
import Button from 'shared/components/ui/Button'
import uuid from 'react-uuid'

const cssClass = styles(scss)

/**
 * Info Section - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `info-section`
 * @param {string} props.title - title
 * @param {array} props.list - list of items
 * @param {string} props.url - image url
 * @param {string} props.button - button title
 * @param {func} props.onClick - button action
 * @return {object} An object of children element
 */
const InfoSection = ({ className, title, list, url, button, onClick }) => {
  const renderList = useMemo(
    () => (
      <List listStyle="ordered-check">
        {list.map(item => (
          <ListItem
variant="list"
key={uuid()}>
            <Paragraph size={18}>
              <FormattedMessage id={item} />
            </Paragraph>
          </ListItem>
        ))}
      </List>
    ),
    []
  )

  return (
    <div className={cssClass(className)}>
      <div>
        <Heading
level={1}
bold>
          <FormattedMessage id={`${title}`} />
        </Heading>

        {renderList}

        <Spacer space="medium" />

        <Button
size="large"
onClick={onClick}>
          <FormattedMessage id={button} />
        </Button>
      </div>

      <div>
        <Image
src={url}
size={526} />
      </div>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
InfoSection.displayName = 'Info Section'

/**
 * The properties.
 * @type {Object}
 */
InfoSection.propTypes = {
  /**
   * Classname, default `info-section`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Title
   */
  title: PropTypes.string.isRequired,
  /**
   * List of items
   */
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Image url
   */
  url: PropTypes.string.isRequired,
  /**
   * Button title
   */
  button: PropTypes.string.isRequired,
  /**
   * onChange is button action
   */
  onClick: PropTypes.func
}

/**
 * The default properties.
 * @type {Object}
 */
InfoSection.defaultProps = {
  className: 'info-section',
  onClick: () => null
}

export default InfoSection
