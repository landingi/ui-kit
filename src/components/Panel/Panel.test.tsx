import { Panel } from '@components/Panel'
import { render } from '@testing-library/react'

const props = {
  children: 'placeholder'
}

describe('<Panel/> mount', () => {
  it('is mounted', () => {
    render(<Panel {...props}>{props.children}</Panel>)
  })
})
