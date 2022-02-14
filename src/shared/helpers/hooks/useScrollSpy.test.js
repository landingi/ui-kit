import useScrollSpy from '@helpers/hooks/useScrollSpy'
import React, { createRef } from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { isInViewVertical as isInViewVerticalMock } from '@helpers/position'
import { act } from 'react-dom/test-utils'
import { render } from '@jestutils'
import { screen, waitFor } from '@testing-library/react'

jest.mock('@helpers/position', () => ({
  isInViewVertical: jest.fn()
}))

jest.mock('@helpers/events', () => ({
  throttle: jest.fn(callback => callback())
}))

describe('should use useScrollSpy', () => {
  it('should return default set active element', () => {
    const firstElement = document.createElement('div')

    const firstRef = (createRef().current = firstElement)
    const secondRef = (createRef().current = <span />)

    const { result } = renderHook(() =>
      useScrollSpy({
        activeSectionDefault: firstElement,
        sectionElementRefs: [firstRef, secondRef]
      })
    )

    expect(result.current).toEqual(firstElement)
  })

  it('should return only this section which is vertically is in view vertical', () => {
    isInViewVerticalMock.mockReturnValueOnce(true).mockReturnValueOnce(false)

    global.innerHeight = 500
    global.document.height = 1200

    const firstRef = createRef()
    const secondRef = createRef()

    waitFor(() => {
      render(
        <div>
          <div ref={firstRef} data-testid='first' style={{ height: 1300 }} />
          <div ref={secondRef} data-testid='second' style={{ height: 300 }} />
        </div>
      )
    })

    const { result } = renderHook(() =>
      useScrollSpy({
        activeSectionDefault: 0,
        sectionElementRefs: [firstRef, secondRef]
      })
    )

    act(() => {
      global.document.scrollTop = 50
    })

    const activeElement = screen.getByTestId('first')

    expect(result.current).toBe(activeElement)
  })
})
