import React from 'react'
import { mount } from 'enzyme'
import Accordion from '@components/ui/Accordion'
import { Mugshot } from 'mugshot'
import { WebdriverIOAdapter } from '@mugshot/webdriverio'
import { remote } from 'webdriverio'

const accordionComponent = (
  <Accordion>
    <div label='label'>children</div>
  </Accordion>
)

describe('<Accordion/> mount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(accordionComponent)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('is mounted', () => {
    expect(wrapper.exists()).toBe(true)
  })
})

describe('<Accordion/> visual regression', () => {
  test('GitHub project page should look the same', async () => {
    // 1. Open the browser.
    // const browser = await remote({
    //   headless: true,
    //   hostname: 'localhost',
    //   capabilities: { browserName: 'chrome' }
    // })
    // // 2. Navigate to the page you want to test.
    // await browser.url('https://github.com/NiGhTTraX/mugshot')
    // // 3. Set up mugshot.
    // const mugshot = new Mugshot(new WebdriverIOAdapter(browser), 'screenshots')
    // // 4. Take the screenshot.
    // const result = await mugshot.check('project page')
    // 5. Check the result.
    // expect(result.matches).toBeTruthy()
  })
})
