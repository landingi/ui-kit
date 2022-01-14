import React from 'react'
import { mount } from 'enzyme'
import { IntlProvider } from 'react-intl'
import { render as rtlRender } from '@testing-library/react'
import { getLanguage, getMessages } from '@helpers/i18n'

/**
 * makeMountRender - a util function that accepts a component and some default props.
 * We return a function so that we can override the default props if desired.
 * This function returns a react wrapper using enzyme’s mount.
 * @param {object} Component - component
 * @param {object} defaultProps - props
 * @return {object} An object of children element
 */
export const makeMountRender = (
  Component,
  defaultProps = {}
) => {
  return (customProps = {}) => {
    const props = {
      ...defaultProps,
      ...customProps
    }
    return mount(<Component {...props} />)
  }
}

/**
 *  snapshotify - a util function that accepts an enzyme
 * react wrapper and calls its html method returning an HTML string.
 * @param {object} reactWrapper - react elements
 * @return {object} An object of children element
 */
export const snapshotify = reactWrapper =>
  reactWrapper.html()

  /**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * This helper function aim to address that and wrap a valid,
 * English-locale intl context around them.
 */
const messages = require('@i18n/en/en.json')
const defaultLocale = 'en'
const locale = defaultLocale

export const mountWithIntl = node =>
  mount(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      messages
    }
  })

/**
  * render function that overrides react-testing-library render functions
  * it wraps given component with IntlProvider
  * @param {object} ui - component to render
  * @param {object} param1
  * @return wrapped element
*/
const render = (ui, { locale = 'en', ...renderOptions } = {}) => {
  const wrapper = ({ children }) => (
    <IntlProvider locale={locale} messages={getMessages[getLanguage]}>
      {children}
    </IntlProvider>
  )
  return rtlRender(ui, { wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { render }