import React from 'react'
import Search from '@components/ui/Search'
import registerIcons from '@helpers/icons'
import { mountWithIntl } from '@jestutils'

registerIcons()

const mockOnSubmit = jest.fn()
const mockOnProtectedSubmit = jest.fn()

const props = {
  className: 'search',
  size: 'medium',
  autoFocus: false,
  onChange: () => null,
  onsubmit: mockOnSubmit(),
  onProtectedSubmit: mockOnProtectedSubmit(),
  children: 'children',
  variant: 'input',
  label: null
}

const searchComponent = <Search {...props} />

describe('<Search/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithIntl(searchComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('default prop `onChange` should be undefined', () => {
    const result = Search.type.defaultProps.onChange()

    expect(result).toBe(null)
  })

  it('default prop `onKeyDown` should be undefined', () => {
    const result = Search.type.defaultProps.onKeyDown()

    expect(result).toBe(null)
  })

  it('should display search input', () => {
    wrapper.setProps({
      variant: 'button'
    })
    wrapper.find({ name: 'search' })

    expect(wrapper.exists()).toBe(true)
  })

  it('should display search icon', async done => {
    wrapper.setProps({
      variant: 'input'
    })

    mockOnSubmit()

    wrapper.update()

    done()

    expect(wrapper.find('.search__icon').exists()).toBe(true)
  })

  it('should display search button', async done => {
    wrapper.setProps({
      variant: 'input'
    })

    mockOnProtectedSubmit()
    wrapper.update()

    expect(wrapper.find('FontAwesomeIcon').prop('icon')).toBe('search')

    done()
  })
})
