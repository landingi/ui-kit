import '@testing-library/jest-dom'

import { FilterTag, FilterTagProps } from '@components/FilterTag'
import { render } from '@testing-library/react'

const props: FilterTagProps = {
  variant: 'primary',
  children: 'Primary'
}

describe('<FilterTag/> tests', () => {
  it('renders properly', () => {
    render(<FilterTag {...props} />)
  })

  it('has `Primary` children', () => {
    const { getByText } = render(<FilterTag {...props} />)

    expect(getByText('Primary')).toBeInTheDocument()
  })

  it('is disabled', () => {
    const { getByTestId } = render(<FilterTag {...props} isDisabled />)

    expect(getByTestId('FilterTag')).toBeDisabled()
  })
})
