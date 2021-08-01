/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * This helper function aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import { IntlProvider } from 'react-intl'
import { mount } from 'enzyme'

const messages = require('@i18n/en/en.json')
const defaultLocale = 'en'
const locale = defaultLocale

export const mountWithIntl = node => (
  mount(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      messages
    }
  })
)
