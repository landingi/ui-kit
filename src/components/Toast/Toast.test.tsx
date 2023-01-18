import '@testing-library/jest-dom'

import { emitToastToggle } from '@events/toast'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Toast } from './Toast'

jest.setTimeout(10000)

describe('Toast tests', () => {
  it('renders, opens and closes properly', async () => {
    render(<Toast />)

    await act(async () => emitToastToggle())

    await waitFor(() =>
      expect(screen.getByTestId('toast-component')).toBeInTheDocument()
    )

    await act(
      async () =>
        new Promise(r => {
          setTimeout(r, 5001)
        })
    )

    expect(screen.queryByTestId('toast-component')).not.toBeInTheDocument()
  })

  it('closes by button click properly', async () => {
    render(<Toast />)

    await act(async () => emitToastToggle())

    await waitFor(() =>
      expect(screen.getByTestId('toast-component')).toBeInTheDocument()
    )

    const closeButton = screen.getByTestId('close-component-button')

    fireEvent.click(closeButton)

    expect(screen.queryByTestId('toast-component')).not.toBeInTheDocument()
  })
})
