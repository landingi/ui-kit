import { Close } from '@components/Close'
import { render } from '@testing-library/react'

const onClick = jest.fn()

const props = {
  onClick
}

describe('<Close/> mount', () => {
  it('is mounted', () => {
    render(<Close {...props} />)
  })
})
