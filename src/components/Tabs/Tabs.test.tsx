import '@testing-library/jest-dom'

import { Tab } from '@components/Tabs/Tab'
import { TabList } from '@components/Tabs/TabList'
import { TabPanel } from '@components/Tabs/TabPanel'
import { Tabs } from '@components/Tabs/Tabs'
import { fireEvent, render } from '@testing-library/react'
import { FC } from 'react'

const props = {
  initialValue: 'predefined'
}

const Component: FC<{ isDisabled?: boolean }> = ({ isDisabled = false }) => (
  <Tabs {...props}>
    <TabList>
      <Tab name='predefined' onClick={() => {}}>
        <span>Some text</span>
      </Tab>
      <Tab name='addittional' isDisabled={isDisabled} onClick={() => {}}>
        <span>Some text</span>
      </Tab>
    </TabList>

    <TabPanel name='predefined'>Tab Panel predefined</TabPanel>
    <TabPanel name='addittional'>Tab Panel addittional</TabPanel>
  </Tabs>
)

describe('<Tabs/> tests', () => {
  it('renders properly', () => {
    const { getByText, queryByText } = render(<Component />)

    const predefinedTabContent = getByText('Tab Panel predefined')
    const addittionalTabContent = queryByText('Tab Panel addittional')

    expect(predefinedTabContent).toBeInTheDocument()
    expect(addittionalTabContent).not.toBeInTheDocument()
  })

  it('switch content on tab click', () => {
    const { getAllByTestId, queryByText } = render(<Component />)

    const addittionalTabButtons = getAllByTestId('tab-button')

    fireEvent.click(addittionalTabButtons[1])

    const addittionalTabContent = queryByText('Tab Panel addittional')

    expect(addittionalTabContent).toBeInTheDocument()
  })

  it('does not switch content on tab click when it is disabled', () => {
    const { getAllByTestId, queryByText } = render(<Component isDisabled />)

    const addittionalTabButtons = getAllByTestId('tab-button')

    fireEvent.click(addittionalTabButtons[1])

    const addittionalTabContent = queryByText('Tab Panel addittional')

    expect(addittionalTabContent).not.toBeInTheDocument()
  })
})
