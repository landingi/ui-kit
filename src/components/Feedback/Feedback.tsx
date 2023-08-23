import { Alert } from '@components/Alert'
import Button from '@components/Button'
import { Close } from '@components/Close'
import Spreader from '@components/Spreader'
import { getLocalStorage, setLocalStorage } from '@helpers/storage'
import { FC, useState } from 'react'
import { Row } from 'simple-flexbox'

import styles from './Feedback.module.scss'

export interface FeedbackProps {
  className?: string | string[]
  customIcon?: string
  i18n: {
    name: string
    content: string
    button: string
  }
  handleFeedback: () => void
  buttonVariant: 'primary' | 'secondary'
}

export const Feedback: FC<FeedbackProps> = ({
  className,
  customIcon,
  i18n,
  handleFeedback,
  buttonVariant = 'secondary'
}) => {
  const [feedbackIsClosed, setFeedbackIsClosed] = useState(
    !!getLocalStorage(`${i18n.name}-feedback`)
  )

  const handleCloseFeedback = () => {
    setLocalStorage(`${i18n.name}-feedback`, 'true')
    setFeedbackIsClosed(true)
  }

  return feedbackIsClosed ? null : (
    <Alert className={className} customIcon={customIcon}>
      <Row justifyContent='space-between' alignItems='center'>
        {i18n.content}

        <Spreader spread='small' />

        <Row>
          <Button variant={buttonVariant} size='tiny' onClick={handleFeedback}>
            {i18n.button}
          </Button>

          <Close
            className={styles.icon}
            onClick={handleCloseFeedback}
            size={12}
            iconColor='info'
          />
        </Row>
      </Row>
    </Alert>
  )
}

Feedback.displayName = 'Feedback'
