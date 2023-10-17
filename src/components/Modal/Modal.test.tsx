import '@testing-library/jest-dom'

import { Button } from '@components/Button'
import { Modal } from '@components/Modal'
import { fireEvent, render, screen } from '@testing-library/react'

const onClick = jest.fn()

const props = {
  isActive: true,
  onClick,
  children: <Button>Jestem przyciskiem</Button>,
  i18n: {
    cancel: 'cancel'
  }
}
const modalComponent = <Modal {...props} />

describe('<Modal /> global mount', () => {
  it('is mounted', () => {
    render(modalComponent)
  })

  it('should align the button to the right', () => {
    const updatedProps = { ...props, align: 'right', hasFooter: true }

    render(<Modal {...updatedProps} />)

    const footer = screen.getByTestId('modal-footer')

    expect(footer).toHaveClass('modal__footer--align-right')
  })

  it('has loader when isLoading se to true', () => {
    const updatedProps = { ...props, isLoading: true }

    render(<Modal {...updatedProps} />)

    const loader = screen.getByTestId('loader-default')

    expect(loader).toBeInTheDocument()
  })

  it('has title in the header', () => {
    const updatedProps = { ...props, i18n: { title: 'Jestem tytułem' } }

    render(<Modal {...updatedProps} />)

    const heading = screen.getByText('Jestem tytułem')

    expect(heading).toBeInTheDocument()
  })

  it('has image in the header', () => {
    const updatedProps = { ...props, image: 'http://www.landingi.com/logo.png' }

    render(<Modal {...updatedProps} />)

    const image = screen.getByTestId('image')

    expect(image).toHaveAttribute(
      'src',
      expect.stringMatching('http://www.landingi.com/logo.png')
    )
  })

  it('has button mark as spam in the header and triggers onMarkAsSpam callback', () => {
    const updatedProps = {
      ...props,
      isMarkAsSpamVisible: true,
      onMarkAsSpam: jest.fn(),
      i18n: { markSpam: 'mark spam' }
    }

    render(<Modal {...updatedProps} />)

    const markSpamButton = screen.getByText('mark spam')

    expect(markSpamButton).toBeInTheDocument()

    fireEvent.click(markSpamButton)

    expect(updatedProps.onMarkAsSpam).toHaveBeenCalled()
  })

  it('has button edit in the header and triggers onEdit callback', () => {
    const updatedProps = {
      ...props,
      isEditable: true,
      onEdit: jest.fn()
    }

    render(<Modal {...updatedProps} />)

    const editButton = screen.getByTestId('modal-button-edit')

    fireEvent.click(editButton)

    expect(updatedProps.onEdit).toHaveBeenCalled()
  })

  it('has component in the header', () => {
    const updatedProps = {
      ...props,
      isComponent: true
    }

    render(<Modal {...updatedProps} />)

    const modalComponent = screen.getByTestId('modal-component')

    expect(modalComponent).toBeInTheDocument()
  })

  it('has custom button in the footer', () => {
    const updatedProps = {
      ...props,
      hasCustomButton: true,
      hasFooter: true
    }

    render(<Modal {...updatedProps} />)

    const customButton = screen.getByTestId('modal-custom-button')

    expect(customButton).toBeInTheDocument()
  })

  it('has custom z-index', () => {
    const updatedProps = {
      ...props,
      customZIndex: {
        backdrop: 100,
        modal: 200,
        dialog: 300
      }
    }

    render(<Modal {...updatedProps} />)

    const backdrop = screen.getByTestId('backdrop')
    const modal = screen.getByTestId('modal')
    const dialog = screen.getByTestId('dialog')

    expect(backdrop).toHaveStyle('z-index: 100')
    expect(modal).toHaveStyle('z-index: 200')
    expect(dialog).toHaveStyle('z-index: 300')
  })
})
