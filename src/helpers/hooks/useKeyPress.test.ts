import { useKeyPress } from '@helpers/hooks/useKeyPress'
import { fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

describe('useKeyPress tests', () => {
  it('callback function after pressing the Enter key', () => {
    const callback = jest.fn()
    const key = 'Enter'

    renderHook(() => useKeyPress(key, callback))

    fireEvent.keyDown(document, { key: 'Enter', code: '13' })

    expect(callback).toBeCalledTimes(1)
  })
})
