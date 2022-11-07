import React from 'react'
import Searcher from '@components/Searcher'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

const mockedSearchFunction = jest.fn()
const mockedSetSearchResult = jest.fn()

const props = {
  searchFunction: mockedSearchFunction,
  setSearchResult: mockedSetSearchResult,
  liveChanges: false,
  i18n: {
    placeholder: 'jestem placeholderem'
  },
  protectedSubmit: false,
  setSearchPhrase: null
}

const component = <Searcher {...props} />

describe('<Searcher/> mount', () => {
  it('is mounted', () => {
    render(component)
  })

  it('should have defined default prop i18', () => {
    render(component)

    const searcher = screen.getByPlaceholderText('jestem placeholderem')

    expect(searcher).toBeInTheDocument()
  })

  it('on change search result should be called with no value', () => {
    render(component)

    const searcher = screen.getByTestId('search-input')

    fireEvent.change(searcher, { target: { value: '1' } })
    fireEvent.change(searcher, { target: { value: '' } })

    expect(mockedSetSearchResult).toBeCalled()
    expect(mockedSetSearchResult).toBeCalledWith('NO_VALUE')
  })

  it('should call search function with search value onSubmit', async () => {
    const phrase = 'Search phrase'

    render(component)

    const searcher = screen.getByTestId('search-input')

    fireEvent.change(searcher, { target: { value: phrase } })

    const submitButton = screen.getByTestId('search-button')

    fireEvent.submit(submitButton)

    expect(mockedSearchFunction).toBeCalled()
    expect(mockedSearchFunction).toBeCalledWith(phrase)
  })
})
