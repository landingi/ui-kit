import '@testing-library/jest-dom'

import { Headline } from '@components/Headline'
import { render } from '@testing-library/react'

const title = 'Headline title'

const headlineNode = <Headline title={title} />

describe('<Headline/> mount', () => {
  it('is mounted and displays title', () => {
    const { getByText } = render(headlineNode)

    const headlineText = getByText(title)

    expect(headlineText).toBeVisible()
  })

  it('has class name page__headline', () => {
    const { getByTestId } = render(headlineNode)

    const headline = getByTestId('headline')

    expect(headline).toHaveClass('page__headline')
  })

  it('should render custom css class passed by prop', () => {
    const mockedCustomCssClass = 'mocked-class-headline'

    const { getByTestId } = render(
      <Headline title={title} className={mockedCustomCssClass} />
    )

    const headline = getByTestId('headline')

    expect(headline).toHaveClass(mockedCustomCssClass)
  })
})
