import Button from '@components/ui/Button'
import Heading from '@components/ui/Heading'
import Image from '@components/ui/Image'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'
import Panel from '@components/ui/Panel'
import Paragraph from '@components/ui/Paragraph'
import PropTypes from 'prop-types'
import React from 'react'
import Spacer from '@components/ui/Spacer'
import uuid from 'react-uuid'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './BlockSection.module.scss'

/**
 * Block Section - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
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
  const wrapperClasses = useStyles(
    {
      [styles['block-section']]: true
    },
    className
  )

  const elementClasses = useStyles({
    [styles['block-section__panel']]: true,
    [styles['block-section__panel--reverse']]: reverse
  })

  return (
    <div className={wrapperClasses}>
      <Panel variant='padding-none'>
        <div data-testid='panel' className={elementClasses}>
          <div className={styles['block-section__panel--content']}>
            <Heading bold level={2}>
              {title}
            </Heading>

            <Paragraph
              line={20}
              padding={list ? 'none' : 'medium'}
              weight={400}
            >
              {message}
            </Paragraph>

            {list && (
              <List listStyle='ordered-disc'>
                {list.map(item => (
                  <ListItem key={uuid()} variant='block'>
                    {item}
                  </ListItem>
                ))}
              </List>
            )}

            <Spacer space={list ? 'medium' : 'small'} />

            <Button onClick={onClick}>{button}</Button>
          </div>

          <Image size={527} src={url} />
        </div>
      </Panel>
    </div>
  )
}

BlockSection.displayName = 'Block Section'

BlockSection.propTypes = {
  button: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  list: PropTypes.arrayOf(PropTypes.string),
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  reverse: PropTypes.bool,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

BlockSection.defaultProps = {
  className: '',
  list: null,
  reverse: false,
  onClick: () => null
}

export default BlockSection
