import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import Image from '@components/Image'
import { List } from '@components/List'
import { ListItem } from '@components/List/Item'
import { Paragraph } from '@components/Paragraph'
import { Spacer } from '@components/Spacer'
import { generateFakeUuid } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, Fragment, MouseEvent, useMemo } from 'react'

import styles from './InfoSection.module.scss'

interface InfoSectionProps {
  className?: string | string[]
  title: string
  list: string[]
  url: string
  button: string
  image?: {
    src: string
    size: number
  }
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

export const InfoSection: FC<InfoSectionProps> = ({
  className = '',
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
          <ListItem key={generateFakeUuid()} variant='list'>
            <Paragraph size={18}>{item}</Paragraph>
          </ListItem>
        ))}
      </List>
    ),
    [list]
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
            <Image src={image.src} size={`${image.size}px`} />

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
        <Image size='526px' src={url} />
      </div>
    </div>
  )
}

InfoSection.displayName = 'InfoSection'
