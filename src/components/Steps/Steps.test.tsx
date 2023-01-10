import '@testing-library/jest-dom'

import Steps from '@components/Steps'
import { render } from '@testing-library/react'
import { StepsProps } from './Steps'

const props: StepsProps = {
  data: [
    {
      variant: 'completed',
      description: 'Completed step'
    },
    {
      variant: 'current',
      description: 'Current step'
    },
    {
      variant: 'next',
      description: 'Next step'
    }
  ]
}

describe('<Steps /> mount', () => {
  it('should render <Steps />', async () => {
    const { getByText } = render(<Steps {...props} />)

    const step1 = getByText('1')
    const stepDescription1 = getByText('Completed step')

    const step2 = getByText('2')
    const stepDescription2 = getByText('Current step')

    const step3 = getByText('3')
    const stepDescription3 = getByText('Next step')

    expect(step1).toHaveClass(
      'step__number step__number--completed step__number--small'
    )
    expect(stepDescription1).toHaveClass('step__description--completed')

    expect(step2).toHaveClass(
      'step__number step__number--current step__number--small'
    )
    expect(stepDescription2).toHaveClass('step__description--current')

    expect(step3).toHaveClass(
      'step__number step__number--next step__number--small'
    )
    expect(stepDescription3).toHaveClass('step__description--next')
  })
})
