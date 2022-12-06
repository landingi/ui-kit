import '@testing-library/jest-dom'

import { BoxBackground } from '@components/BoxBackground'
import { render } from '@testing-library/react'

describe('<BoxBackground /> mount', () => {
  it('is mounted', () => {
    const { getByText } = render(
      <BoxBackground variant='info'>children</BoxBackground>
    )

    const boxBackgroundNode = getByText('children')

    expect(boxBackgroundNode).toBeVisible()
  })

  it(`should contains boxBackground class `, () => {
    const { getByText } = render(
      <BoxBackground variant='info'>children</BoxBackground>
    )

    const boxBackgroundNode = getByText('children')

    expect(boxBackgroundNode).toHaveClass('boxBackground')
  })

  it('has proper class name on success variant', () => {
    const { getByText } = render(
      <BoxBackground variant='success'>children</BoxBackground>
    )

    const boxBackgroundNode = getByText('children')

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${'success'}`)
  })

  it('has proper class name on warning variant', () => {
    const { getByText } = render(
      <BoxBackground variant='warning'>children</BoxBackground>
    )

    const boxBackgroundNode = getByText('children')

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${'warning'}`)
  })

  it('has proper class name on alert variant', () => {
    const { getByText } = render(
      <BoxBackground variant='alert'>children</BoxBackground>
    )

    const boxBackgroundNode = getByText('children')

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${'alert'}`)
  })

  it('has proper class name on progress variant', () => {
    const { getByText } = render(
      <BoxBackground variant='progress'>children</BoxBackground>
    )

    const boxBackgroundNode = getByText('children')

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${'progress'}`)
  })

  it('has proper class name on info variant', () => {
    const { getByText } = render(
      <BoxBackground variant='info'>children</BoxBackground>
    )

    const boxBackgroundNode = getByText('children')

    expect(boxBackgroundNode).toHaveClass(`boxBackground--${'info'}`)
  })
})
