import React from 'react'
import Searcher from '@components/global/Searcher'
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
    placeholder: 'null'
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
      placeholder: 'null'
    })
  })

  it('should have defined default prop protectedSubmit with value set false', () => {
    expect(wrapper.props().protectedSubmit).toEqual(false)
  })

  it('should have defined default prop setSearchPhrase with value set to null', () => {
    expect(wrapper.props().setSearchPhrase).toEqual(null)
  })
})
