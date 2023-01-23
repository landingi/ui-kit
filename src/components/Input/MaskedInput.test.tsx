import { MaskedInput } from '@components/Input/MaskedInput'
import { fireEvent, render } from '@testing-library/react'

describe('<MaskedInput /> tests', () => {
  it('renders properly with default props', () => {
    render(<MaskedInput mask={false} />)
  })

  it('renders properly with label', () => {
    const { getByText } = render(
      <MaskedInput i18n={{ label: 'test-label' }} mask={false} />
    )

    getByText('test-label')
  })

  it('call default callbacks', () => {
    const { getByTestId } = render(<MaskedInput mask={false} />)

    const input = getByTestId('masked-input')

    fireEvent.change(input, { target: { value: 'test' } })
    fireEvent.blur(input)
    fireEvent.keyDown(input)
  })

  it('renders properly with disabled props', () => {
    render(<MaskedInput disabled mask={false} />)
  })
})
