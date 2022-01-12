import React from 'react'
import Searcher from '@components/global/Searcher'
import Search from '@components/global/Searcher'
import { mountWithIntl } from '@jestutils'
import registerIcons from '@helpers/icons'

registerIcons()

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
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(component)
  })

  afterEach(() => {
    wrapper.unmount()
    jest.clearAllMocks()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should have defined default prop searchFunction', () => {
    expect(wrapper.props().searchFunction).toBeDefined()
  })

  it('should have defined default prop setSearchResult', () => {
    expect(wrapper.props().setSearchResult).toBeDefined()
  })

  it('should have defined default prop liveChanges with value set to false', () => {
    expect(wrapper.props().liveChanges).toEqual(false)
  })

  it('should have defined default prop i18', () => {
    expect(wrapper.props().i18n).toEqual({
      placeholder: 'jestem placeholderem'
    })
  })

  it('should have defined default prop protectedSubmit with value set false', () => {
    expect(wrapper.props().protectedSubmit).toEqual(false)
  })

  it('should have defined default prop setSearchPhrase with value set to null', () => {
    expect(wrapper.props().setSearchPhrase).toEqual(null)
  })

  it('on change search result should be called with no value', () => {
    wrapper
      .find(Search)
      .find('input')
      .simulate('change', { target: { value: '' } })

    expect(mockedSetSearchResult).toBeCalled()
    expect(mockedSetSearchResult).toBeCalledWith('NO_VALUE')
  })

  it('should call search function with search value onSubmit', () => {
    const phrase = 'Search phrase'

    wrapper.find(Search).find('input').instance().value = phrase

    wrapper.find(Search).find('form').simulate('submit')

    expect(mockedSearchFunction).toBeCalled()
    expect(mockedSearchFunction).toBeCalledWith(phrase)
  })
})
