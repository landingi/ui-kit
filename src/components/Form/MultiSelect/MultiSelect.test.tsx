import '@testing-library/jest-dom'

import { Button } from '@components/Button'
import {
  EmptySearchResultsComponentProps,
  MultiSelect
} from '@components/Form/MultiSelect'
import { Heading } from '@components/Heading'
import { Input } from '@components/Input'
import Spreader from '@components/Spreader'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { FC, useState } from 'react'
import { Column, Row } from 'simple-flexbox'

const EmptySearchResultsComponent: FC<EmptySearchResultsComponentProps> = ({
  addCustomOption,
  searchPhrase
}) => {
  const [appName, setAppName] = useState(searchPhrase)

  return (
    <Column alignItems='center'>
      <Heading level={3} bold>
        Oh no… We couldn’t find what you were looking for.
      </Heading>
      <Row>
        <Input
          onChange={event => setAppName(event?.target?.value)}
          value={appName}
        />

        <Spreader />

        <Button
          onClick={() =>
            addCustomOption({
              value: appName,
              label: appName
            })
          }
          isDisabled={appName.length === 0}
        >
          Add app
        </Button>
      </Row>
    </Column>
  )
}

const multiSelectProps = {
  formikKey: 'apps',
  id: 'apps',
  onChange: () => null,
  values: [],
  initialOptions: [
    {
      value: 'google-sheets',
      label: 'GoogleSheets'
    },
    {
      value: 'mail-chimp',
      label: 'MailChimp'
    },
    {
      value: 'fb-lead-ads',
      label: 'Facebook Lead Ads'
    },
    {
      value: 'salesforce',
      label: 'Salesforce'
    }
  ],
  searcher: {
    i18n: {
      placeholder: 'App name...'
    }
  },
  emptySearchResultsComponent: EmptySearchResultsComponent
}

describe('<MultiSelect /> mount', () => {
  it('is mounted', () => {
    render(<MultiSelect {...multiSelectProps} />)
  })

  it('shows proper badge when option is clicked ', () => {
    render(<MultiSelect {...multiSelectProps} />)

    let googleSheetsBadge = screen.queryByTestId('badge')

    expect(googleSheetsBadge).not.toBeInTheDocument()

    const googleSheetsOption = screen.getByText('GoogleSheets')

    fireEvent.click(googleSheetsOption)

    googleSheetsBadge = screen.queryByTestId('badge')

    expect(googleSheetsBadge).toHaveTextContent('GoogleSheets')
  })

  it("doesn't show proper badge when option is double clicked ", () => {
    render(<MultiSelect {...multiSelectProps} />)

    let googleSheetsBadge = screen.queryByTestId('badge')

    expect(googleSheetsBadge).not.toBeInTheDocument()

    const googleSheetsOption = screen.getByText('GoogleSheets')

    fireEvent.click(googleSheetsOption)

    fireEvent.click(googleSheetsOption)

    googleSheetsBadge = screen.queryByTestId('badge')

    expect(googleSheetsBadge).not.toBeInTheDocument()
  })

  it('shows 3 badges when 3 options are chosen', () => {
    render(<MultiSelect {...multiSelectProps} />)

    let badges = screen.queryAllByTestId('badge')

    expect(badges).toHaveLength(0)

    const googleSheetsOption = screen.getByText('GoogleSheets')
    const mailChimpOption = screen.getByText('MailChimp')
    const salesforceOption = screen.getByText('Salesforce')

    fireEvent.click(googleSheetsOption)

    fireEvent.click(mailChimpOption)

    fireEvent.click(salesforceOption)

    badges = screen.queryAllByTestId('badge')

    expect(badges).toHaveLength(3)
  })

  it('shows only searched options when no options are selected', async () => {
    render(<MultiSelect {...multiSelectProps} />)

    const options = screen.queryAllByTestId('box-outline')

    expect(options).toHaveLength(4)

    const searcher = screen.getByTestId('search-input')

    fireEvent.change(searcher, { target: { value: 'google' } })

    await waitFor(async () => {
      expect(await screen.findAllByTestId('box-outline')).toHaveLength(1)
      expect(screen.getByText('GoogleSheets')).toBeInTheDocument()
    })
  })

  it('shows searched and selected options when some options are selected', async () => {
    render(<MultiSelect {...multiSelectProps} />)

    const options = screen.queryAllByTestId('box-outline')

    expect(options).toHaveLength(4)

    const googleSheetsOption = screen.getByText('GoogleSheets')

    fireEvent.click(googleSheetsOption)

    const searcher = screen.getByTestId('search-input')

    fireEvent.change(searcher, { target: { value: 'mailchimp' } })

    await waitFor(async () => {
      expect(await screen.findAllByTestId('box-outline')).toHaveLength(2)
    })
  })

  it('shows no options and EmptySearchResultsComponent when no options are found', async () => {
    render(<MultiSelect {...multiSelectProps} />)

    const options = screen.queryAllByTestId('box-outline')

    expect(options).toHaveLength(4)

    const searcher = screen.getByTestId('search-input')

    const wrongValue = 'zle value'

    fireEvent.change(searcher, { target: { value: wrongValue } })

    await waitFor(async () => {
      expect(await screen.findByTestId('input-component')).toHaveValue(
        wrongValue
      )
      expect(await screen.findByText('Add app')).toBeInTheDocument()
    })
  })

  it("has possibility to add app if it isn't found", async () => {
    render(<MultiSelect {...multiSelectProps} />)

    const options = screen.queryAllByTestId('box-outline')

    expect(options).toHaveLength(4)

    const searcher = screen.getByTestId('search-input')

    const wrongValue = 'zle value'

    fireEvent.change(searcher, { target: { value: wrongValue } })

    await waitFor(async () => {
      const button = await screen.findByText('Add app')

      fireEvent.click(button)

      expect(screen.getByText(wrongValue))
    })
  })
})
