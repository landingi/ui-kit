import { FC, ReactNode } from 'react'
import { Row } from 'simple-flexbox'

interface EmptyMessageProps {
  colSpan: number
  emptyMessage: () => ReactNode
}

export const EmptyMessage: FC<EmptyMessageProps> = ({
  colSpan,
  emptyMessage
}) => (
  <div>
    <div>
      <div /* colSpan={colSpan} */>
        <Row justifyContent='center'>{emptyMessage()}</Row>
      </div>
    </div>
  </div>
)
