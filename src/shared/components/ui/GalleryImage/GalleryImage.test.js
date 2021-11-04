import React from 'react'
import GalleryImage from '@components/ui/GalleryImage'
import { mountWithIntl } from '@jestutils'

const props = {
  src: 'https://ca.slack-edge.com/T07M95VD2-U0BFVANVB-fd337e02e237-512'
}

const component = <GalleryImage {...props} />

describe('<GalleryImage/> mount', () => {
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

  it('has class name `background`', () => {
    expect(wrapper.find('div.background').exists()).toBe(true)
  })

  it('has class name `image`', () => {
    expect(wrapper.find('div.image').exists()).toBe(true)
  })

  it('default prop `onClick` should be null', () => {
    const result = GalleryImage.defaultProps.onClick()

    expect(result).toBe(null)
  })

  it('default prop `onDoubleClick` should be null', () => {
    const result = GalleryImage.defaultProps.onDoubleClick()

    expect(result).toBe(null)
  })
})
