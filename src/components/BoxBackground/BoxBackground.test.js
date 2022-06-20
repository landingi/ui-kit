import React from 'react'
import { render } from '@jestutils'
import BoxBackground from '@components/BoxBackground'
import '@testing-library/jest-dom'

const initialProps = {
  children: 'children',
  variant: 'info'
}

describe('<BoxBackground /> mount', () => {
  const { children } = initialProps

  const variant = {
    success: 'success',
    warning: 'warning',
    alert: 'alert',
    progress: 'progress',
    info: 'info'
  }

  it('is mounted', () => {
    const { getByText } = render(<BoxBackground {...initialProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toBeVisible()
  })

  it(`should contains boxBackground class `, () => {
    const { getByText } = render(<BoxBackground {...initialProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass('boxBackground')
  })

  it('has proper class name on success variant', () => {
    const newProps = {
      ...initialProps,
      variant: 'success'
    }

    const { success } = variant

    const { getByText } = render(<BoxBackground {...newProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${success}`)
  })

  it('has proper class name on warning variant', () => {
    const newProps = {
      ...initialProps,
      variant: 'warning'
    }

    const { warning } = variant

    const { getByText } = render(<BoxBackground {...newProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${warning}`)
  })

  it('has proper class name on alert variant', () => {
    const newProps = {
      ...initialProps,
      variant: 'alert'
    }

    const { alert } = variant

    const { getByText } = render(<BoxBackground {...newProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${alert}`)
  })

  it('has proper class name on progress variant', () => {
    const newProps = {
      ...initialProps,
      variant: 'progress'
    }

    const { progress } = variant

    const { getByText } = render(<BoxBackground {...newProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${progress}`)
  })

  it('has proper class name on info variant', () => {
    const { info } = variant

    const { getByText } = render(<BoxBackground {...initialProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${info}`)
  })
})
