import '@testing-library/jest-dom'

import InfoBar from '@components/InfoBar'
import { render } from '@testing-library/react'
import React from 'react'

const props = {
  children: 'Info Bar'
}

describe('<InfoBar /> mount', () => {
  const { children } = props

  const wrapperTestId = 'infobar-wrapper'

  const type = {
    alert: 'alert',
    info: 'info',
    warning: 'warning'
  }

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

  it(`should be rendered alert type of infobar when passed prop 'type' is alert`, () => {
    const newProps = {
      ...props,
      type: 'alert'
    }

    const { alert } = type

    const { getByTestId } = render(<InfoBar {...newProps} />)

    const infoBarWrapperNode = getByTestId(wrapperTestId)

    expect(infoBarWrapperNode).toHaveClass(`info-bar--${alert}`)
  })

  it(`should be rendered info type of infobar when passed prop 'type' is info`, () => {
    const newProps = {
      ...props,
      type: 'info'
    }

    const { info } = type

    const { getByTestId } = render(<InfoBar {...newProps} />)

    const infoBarWrapperNode = getByTestId(wrapperTestId)

    expect(infoBarWrapperNode).toHaveClass(`info-bar--${info}`)
  })

  it(`should be rendered warning type of infobar when passed prop 'type' is warning`, () => {
    const newProps = {
      ...props,
      type: 'warning'
    }

    const { warning } = type

    const { getByTestId } = render(<InfoBar {...newProps} />)

    const infoBarWrapperNode = getByTestId(wrapperTestId)

    expect(infoBarWrapperNode).toHaveClass(`info-bar--${warning}`)
  })
})
