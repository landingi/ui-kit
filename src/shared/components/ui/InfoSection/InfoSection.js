import { FormattedMessage } from 'react-intl'
import { styles } from '@helpers/css'
import Button from '@components/ui/Button'
import Heading from '@components/ui/Heading'
import Image from '@components/ui/Image'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'
import Paragraph from '@components/ui/Paragraph'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import Spacer from '@components/ui/Spacer'
import scss from './InfoSection.scss'
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
function InfoSection({
  className,
  title,
  list,
  url,
  button,
  onClick
}) {
  const renderList = useMemo(
    () => (
      <List listStyle='ordered-check'>
        {list.map(item => (
          <ListItem key={uuid()} variant='list'>
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
        <Heading bold level={1}>
          <FormattedMessage id={`${title}`} />
        </Heading>

        {renderList}

        <Spacer space='medium' />

        <Button onClick={onClick} size='large'>
          <FormattedMessage id={button} />
        </Button>
      </div>

      <div>
        <Image size={526} src={url} />
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
   * Button title
   */
  button: PropTypes.string.isRequired,

  /**
   * Classname, default `info-section`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),

  /**
   * List of items
   */
  list: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * OnChange is button action
   */
  onClick: PropTypes.func,

  /**
   * Title
   */
  title: PropTypes.string.isRequired,

  /**
   * Image url
   */
  url: PropTypes.string.isRequired
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
