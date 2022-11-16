import '@testing-library/jest-dom'

import { emitTimingToastToggle } from '@events/toast'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

import TimingToast from './TimingToast'

jest.setTimeout(10000)

describe('TimingToast tests', () => {
  it('renders, opens and closes properly', async () => {
    render(<TimingToast />)

    await act(async () => emitTimingToastToggle())

    await waitFor(() =>
      expect(screen.queryByTestId('toast-component')).toBeInTheDocument()
    )

    await act(async () => new Promise(r => setTimeout(r, 5001)))

    expect(screen.queryByTestId('toast-component')).not.toBeInTheDocument()
  })

  it('closes by button click properly', async () => {
    render(<TimingToast />)

    await act(async () => emitTimingToastToggle())

    await waitFor(() =>
      expect(screen.getByTestId('toast-component')).toBeInTheDocument()
    )

    const closeButton = screen.getByTestId('close-component-button')

    fireEvent.click(closeButton)

    expect(screen.queryByTestId('toast-component')).not.toBeInTheDocument()
  })
})
