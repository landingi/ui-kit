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

    const { variant } = newProps

    const { getByText } = render(<BoxBackground {...newProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${variant}`)
  })

  it('has proper class name on warning variant', () => {
    const newProps = {
      ...initialProps,
      variant: 'warning'
    }

    const { variant } = newProps

    const { getByText } = render(<BoxBackground {...newProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${variant}`)
  })

  it('has proper class name on alert variant', () => {
    const newProps = {
      ...initialProps,
      variant: 'alert'
    }

    const { variant } = newProps

    const { getByText } = render(<BoxBackground {...newProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${variant}`)
  })

  it('has proper class name on progress variant', () => {
    const newProps = {
      ...initialProps,
      variant: 'progress'
    }

    const { variant } = newProps

    const { getByText } = render(<BoxBackground {...newProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${variant}`)
  })

  it('has proper class name on info variant', () => {
    const { variant } = initialProps

    const { getByText } = render(<BoxBackground {...initialProps} />)

    const boxBackgroundNode = getByText(children)

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${variant}`)
  })
})
