/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * This helper function aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IntlProvider } from 'react-intl'
import { mount } from 'enzyme'

const messages = require('../../../src/shared/i18n/en/en.json')
const defaultLocale = 'en'
const locale = defaultLocale

export function mountWithIntl (node) {
  return mount(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      messages
    }
  })
}
