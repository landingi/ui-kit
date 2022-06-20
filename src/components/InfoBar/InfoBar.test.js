import React from 'react'
import { render } from '@jestutils'
import InfoBar from '@components/InfoBar'
import '@testing-library/jest-dom'

const props = {
  children: 'Info Bar'
}

describe('<InfoBar /> mount', () => {
  const { children } = props

  const wrapperTestId = 'infobar-wrapper'

  it('is mounted', () => {
    const { getByText } = render(<InfoBar {...props} />)

    const infoBarNode = getByText(children)

    expect(infoBarNode).toBeVisible()
  })

  it('has `info-bar` class', () => {
    const { getByTestId } = render(<InfoBar {...props} />)

    const infoBarWrapperNode = getByTestId(wrapperTestId)

    expect(infoBarWrapperNode).toHaveClass('info-bar')
  })

  it('should be rendered alert type of infobar', () => {
    const newProps = {
      ...props,
      type: 'alert'
    }

    const { type } = newProps

    const { getByTestId } = render(<InfoBar {...newProps} />)

    const infoBarWrapperNode = getByTestId(wrapperTestId)

    expect(infoBarWrapperNode).toHaveClass(`info-bar--${type}`)
  })

  it('should be rendered info type of infobar', () => {
    const newProps = {
      ...props,
      type: 'info'
    }

    const { type } = newProps

    const { getByTestId } = render(<InfoBar {...newProps} />)

    const infoBarWrapperNode = getByTestId(wrapperTestId)

    expect(infoBarWrapperNode).toHaveClass(`info-bar--${type}`)
  })

  it('should be rendered warning type of infobar', () => {
    const newProps = {
      ...props,
      type: 'warning'
    }

    const { type } = newProps

    const { getByTestId } = render(<InfoBar {...newProps} />)

    const infoBarWrapperNode = getByTestId(wrapperTestId)

    expect(infoBarWrapperNode).toHaveClass(`info-bar--${type}`)
  })
})
