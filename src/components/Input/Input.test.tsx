import '@testing-library/jest-dom'

import { Input } from '@components/Input'
import { fireEvent, render, screen } from '@testing-library/react'

const mockedOnChange = jest.fn()
const mockedOnKeyDown = jest.fn()
const mockedOnBlur = jest.fn()

const props = {
  onChange: mockedOnChange,
  onKeyDown: mockedOnKeyDown,
  onBlur: mockedOnBlur
}

const component = <Input {...props} />

describe('<Input /> mount', () => {
  it('is mounted', () => {
    render(component)
  })

  it('calls function passed as onKeyDown prop on click event', () => {
    render(component)

    const input = screen.getByTestId('input-component')

    fireEvent.keyDown(input, { key: 'Enter' })

    expect(mockedOnKeyDown).toHaveBeenCalled()
  })

  it('has tooltip and exclamation icon', () => {
    render(<Input {...props} tooltip='some tooltip content' />)

    const tooltip = screen.getByText('some tooltip content')

    expect(tooltip).toBeInTheDocument()
  })

  it('should be disabled', () => {
    render(<Input {...props} disabled />)

    const input = screen.getByTestId('input-component')

    expect(input).toBeDisabled()
  })

  it('should display label when has i18n.label', () => {
    render(
      <Input
        {...props}
        disabled
        i18n={{
          label: 'I am your label'
        }}
      />
    )

    const label = screen.getByText('I am your label')

    expect(label).toBeInTheDocument()
  })

  it('should not have --show-label when alwaysShowLabel is set on false', () => {
    render(
      <Input
        {...props}
        disabled
        alwaysShowLabel={false}
        i18n={{
          label: 'I am your label'
        }}
      />
    )

    const inputWrapper = screen.getByTestId('input-wrapper')

    expect(inputWrapper).toHaveClass('input__wrapper')
  })

  it('should have --show-label when alwaysShowLabel is set on true', () => {
    render(
      <Input
        {...props}
        disabled
        alwaysShowLabel
        i18n={{
          label: 'I am your label'
        }}
      />
    )

    const inputWrapper = screen.getByTestId('input-wrapper')

    expect(inputWrapper).toHaveClass(
      'input__wrapper input__wrapper--show-label'
    )
  })
})
