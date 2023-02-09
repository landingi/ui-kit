import { Badge } from '@components/Badge'
import { CustomLink } from '@components/CustomLink'
import { Heading } from '@components/Heading'
import { Icon } from '@components/Icon'
import { Paragraph } from '@components/Paragraph'
import Spreader from '@components/Spreader'
import { StatusIcon } from '@components/StatusIcon'
import { Tooltip } from '@components/Tooltip'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'
import { Row } from 'simple-flexbox'

import { Item } from './Item'
import styles from './LandingInfo.module.scss'

const renderThumbnail = (thumbnail_url: string | null) => {
  if (thumbnail_url) {
    return (
      <div
        className={styles['landing-info--picture']}
        style={{ backgroundImage: `url(${thumbnail_url})` }}
      />
    )
  }

  return (
    <div
      className={styles['landing-info--picture']}
      style={{
        backgroundImage:
          "url('https://images.assets-landingi.com/images/no-image.svg')"
      }}
    />
  )
}

export const LandingInfo: FC<Item> = ({
  name,
  domainUrl,
  isPublished,
  isArchived,
  createdAt,
  testEnabled,
  scheduleEnabled,
  caminoLid,
  newCaminoLid,
  groupName,
  thumbnailUrl,
  masterHash,
  smartSectionsCount
}) => {
  const pictureWrapperStyles = useStyles({
    [styles['landing-info']]: true,
    [styles['landing-info--picture']]: true
  })

  const nameWrapperStyles = useStyles({
    [styles['landing-info']]: true,
    [styles['landing-info--text']]: true
  })

  const domainsWrapperStyles = useStyles({
    [styles['landing-info']]: true,
    [styles['landing-info--domains']]: true
  })

  if (isArchived) {
    return (
      <div className={styles['landing-info']}>
        <div className={pictureWrapperStyles}>
          {renderThumbnail(thumbnailUrl)}
        </div>

        <div className={nameWrapperStyles}>
          <Heading level={4}>{name}</Heading>

          <Paragraph size={12} color='accent-3'>
            created: {createdAt}
          </Paragraph>
        </div>
      </div>
    )
  }

  return (
    <div className={styles['landing-info']}>
      <a href={`/dashboard/campaign/${masterHash}`}>
        {renderThumbnail(thumbnailUrl)}
      </a>

      <div className={nameWrapperStyles}>
        <CustomLink
          variant='dark'
          label={name}
          size={16}
          href={`/dashboard/campaign/${masterHash}`}
        />

        <Row className={domainsWrapperStyles} alignItems='center'>
          <StatusIcon
            size='tiny'
            variant={isPublished ? 'active' : 'inactive'}
          />

          <Spreader spread='tiny' />

          <CustomLink
            href={`https://${domainUrl}`}
            label={domainUrl}
            target='_blank'
            variant={isPublished ? 'active' : 'inactive'}
          />
        </Row>

        <Paragraph size={12} color='accent-3'>
          created: {createdAt}
        </Paragraph>

        <div className={styles['landing-info--badges']}>
          {!!smartSectionsCount && (
            <CustomLink
              className={styles['smartsection-badge__link']}
              target='_self'
              label={
                <Badge type='info' tooltip='smartsection'>
                  {smartSectionsCount} SMART SECTIONS
                </Badge>
              }
            />
          )}

          {groupName && (
            <a href='/'>
              <Badge type='accent-6' tooltip={groupName}>
                <Icon icon='icon-folder' color='white' />

                <Spreader spread='tiny' />

                {groupName}
              </Badge>
            </a>
          )}

          {testEnabled && (
            <Badge type='accent-3'>
              <Icon icon='icon-random' color='white' />

              <Spreader spread='tiny' />

              <span>Test</span>
            </Badge>
          )}

          {scheduleEnabled && (
            <Badge type='accent-4'>
              <Icon icon='icon-calendar' color='white' />

              <Spreader spread='tiny' />

              <span>schedule</span>
            </Badge>
          )}

          {(caminoLid || newCaminoLid) && (
            <a href={`/dashboard/${masterHash}/settings`}>
              <Badge type='accent-5'>Camino</Badge>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

LandingInfo.displayName = 'LandingsTableInfo'
