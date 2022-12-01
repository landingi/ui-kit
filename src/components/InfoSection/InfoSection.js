import Button from '@components/Button'
import Heading from '@components/Heading'
import Image from '@components/Image'
import List from '@components/List'
import ListItem from '@components/List/Item'
import { Paragraph } from '@components/Paragraph'
import Spacer from '@components/Spacer'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React, { Fragment, useMemo } from 'react'
import uuid from 'react-uuid'

import styles from './InfoSection.module.scss'

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
const InfoSection = ({
  className,
  title,
  list,
  url,
  button,
  image,
  onClick
}) => {
  const renderList = useMemo(
    () => (
      <List listStyle='ordered-check'>
        {list.map(item => (
          <ListItem key={uuid()} variant='list'>
            <Paragraph size={18}>{item}</Paragraph>
          </ListItem>
        ))}
      </List>
    ),
    []
  )

  const infoSectionStyles = useStyles(
    { [styles['info-section']]: true },
    className
  )

  return (
    <div className={infoSectionStyles}>
      <div>
        {image && (
          <Fragment>
            <Image src={image.src} size={image.size} />

            <Spacer space='medium' />
          </Fragment>
        )}
        <Heading bold level={1}>
          {title}
        </Heading>

        {renderList}

        <Spacer space='medium' />

        <Button onClick={onClick} size='large'>
          {button}
        </Button>
      </div>

      <div>
        <Image size={526} src={url} />
      </div>
    </div>
  )
}

InfoSection.displayName = 'InfoSection'

InfoSection.propTypes = {
  button: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  image: PropTypes.objectOf({ src: PropTypes.string, size: PropTypes.number })
}

InfoSection.defaultProps = {
  className: '',
  onClick: () => null
}

export default InfoSection
