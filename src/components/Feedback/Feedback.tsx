import { Alert } from '@components/Alert'
import Button from '@components/Button'
import { Close } from '@components/Close'
import { getLocalStorage, setLocalStorage } from '@helpers/storage'
import { FC, useState } from 'react'
import { Row } from 'simple-flexbox'

export interface FeedbackProps {
  className?: string | string[]
  customIcon?: string
  i18n: {
    name: string
    content: string
    button: string
  }
  handleFeedback: () => void
}

export const Feedback: FC<FeedbackProps> = ({
  className,
  customIcon,
  i18n,
  handleFeedback
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

        <Row>
          <Button variant='secondary' onClick={handleFeedback}>
            {i18n.button}
          </Button>

          <Close onClick={handleCloseFeedback} iconColor='info' />
        </Row>
      </Row>
    </Alert>
  )
}

Feedback.displayName = 'Feedback'
