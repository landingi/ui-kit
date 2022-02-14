import React, { createRef } from 'react'
import { useClickOutside } from '@helpers/hooks/useClickOutside'
import { renderHook } from '@testing-library/react-hooks'
import { render } from '@jestutils'
import { fireEvent } from '@testing-library/react'

describe('should use useClickOutside', () => {
  it('handlerCallback should be called when something out of component was clicked', () => {
    const handlerCallback = jest.fn()

    const divRef = createRef()

    render(<div ref={divRef}>Testing div with ref</div>)

    renderHook(() => useClickOutside(divRef, handlerCallback))

    fireEvent.click(document)

    expect(handlerCallback).toBeCalledTimes(1)
  })

  it('handlerCallback should not be called when component was clicked', () => {
    const handlerCallback = jest.fn()

    const divRef = createRef()

    render(<div ref={divRef}>Testing div with ref</div>)

    renderHook(() => useClickOutside(divRef, handlerCallback))

    fireEvent.click(divRef.current)

    expect(handlerCallback).toBeCalledTimes(0)
  })
})
