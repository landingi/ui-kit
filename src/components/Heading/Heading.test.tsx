import '@testing-library/jest-dom'

import { Heading } from '@components/Heading'
import { render, screen } from '@testing-library/react'

describe('<Heading/> mount', () => {
  it('is mounted', () => {
    render(<Heading level={1}>Heading placeholder</Heading>)
  })

  it('has `heading` class', () => {
    render(<Heading level={1}>Heading placeholder</Heading>)

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('heading')
  })

  it('when prop `level 1`, has `h1` class', () => {
    render(<Heading level={1}>Heading placeholder</Heading>)

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('h1')
  })

  it('when prop `level 2`, has `h2` class', () => {
    render(<Heading level={2}>Heading placeholder</Heading>)

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('h2')
  })

  it('when prop `level 3`, has `h3` class', () => {
    render(<Heading level={3}>Heading placeholder</Heading>)

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('h3')
  })

  it('when prop `level 4`, has `h4` class', () => {
    render(<Heading level={4}> Heading placeholder </Heading>)

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('h4')
  })

  it('when prop `level 5`, has `h5` class', () => {
    render(<Heading level={5}>Heading placeholder</Heading>)

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('h5')
  })

  it('when prop `level 6`, has `h6` class', () => {
    render(<Heading level={6}>Heading placeholder</Heading>)

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('h6')
  })

  it('when prop `bold` is `false`, has not `heading--bold` class', () => {
    render(<Heading level={1}>Heading placeholder</Heading>)

    const heading = screen.getByTestId('heading')

    expect(heading).not.toHaveClass('heading--bold')
  })

  it('when prop `bold` is `true`, has `heading--bold` class', () => {
    render(
      <Heading level={1} bold>
        Heading placeholder
      </Heading>
    )

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('heading--bold')
  })

  it('when prop `align` is `right`, has `heading--right` class', () => {
    render(
      <Heading level={1} align='right'>
        Heading placeholder
      </Heading>
    )

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('heading--right')
  })

  it('when prop `align` is `left`, has `heading--left` class', () => {
    render(
      <Heading level={1} align='left'>
        Heading placeholder
      </Heading>
    )

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('heading--left')
  })

  it('when prop `align` is `center`, has `heading--center` class', () => {
    render(
      <Heading level={1} align='center'>
        Heading placeholder
      </Heading>
    )

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('heading--center')
  })

  it('when prop `margin` is `none`, has `heading--no-margin` class', () => {
    render(
      <Heading level={1} margin='none'>
        Heading placeholder
      </Heading>
    )

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('heading--no-margin')
  })

  it('when prop `color` is `white`, has `heading__color--white` class', () => {
    render(
      <Heading level={1} color='white'>
        Heading placeholder
      </Heading>
    )

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('heading__color--white')
  })

  it('when prop `color` is `brand`, has `heading__color--brand` class', () => {
    render(
      <Heading level={1} color='brand'>
        Heading placeholder
      </Heading>
    )

    const heading = screen.getByTestId('heading')

    expect(heading).toHaveClass('heading__color--brand')
  })
})
