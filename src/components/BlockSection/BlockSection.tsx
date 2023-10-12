import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import Image from '@components/Image'
import { List } from '@components/List'
import { ListItem } from '@components/List/Item'
import { Panel } from '@components/Panel'
import { Paragraph } from '@components/Paragraph'
import { Spacer } from '@components/Spacer'
import { generateFakeUuid } from '@helpers/data'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, MouseEvent } from 'react'

import styles from './BlockSection.module.scss'

interface BlockSectionProps {
  className?: string | string[]
  title: string
  message: string
  button?: string
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  url: string
  reverse?: boolean
  list?: string[]
}

export const BlockSection: FC<BlockSectionProps> = ({
  className = '',
  title,
  message,
  button,
  onClick = () => null,
  url,
  reverse = false,
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
                  <ListItem key={generateFakeUuid()} variant='block'>
                    {item}
                  </ListItem>
                ))}
              </List>
            )}

            <Spacer space={list ? 'medium' : 'small'} />

            {button && <Button onClick={onClick}>{button}</Button>}
          </div>

          <Image size='527px' src={url} />
        </div>
      </Panel>
    </div>
  )
}

BlockSection.displayName = 'BlockSection'
