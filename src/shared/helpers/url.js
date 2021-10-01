import { FormattedMessage } from 'react-intl'
import React from 'react'

const list = [
  '/settings',
  '/users',
  '/agency/accounts',
  '/agency/accounts/create',
  '/agency/admins',
  '/agency/templates',
  '/account/agency/admins',
  '/account/agency/users',
  '/account/agency/users/add',
  '/account/agency/admins/create',
  '/account/settings',
  '/account/history',
  '/account/affiliate',
  '/account/affiliate/panel',
  '/account/affiliate/clients-list',
  '/account/affiliate/withdrawals-list',
  '/account/affiliate/withdraw',
  '/account/affiliate/advertising-materials',
  '/account/labs',
  '/account/package',
  '/account/tokens',
  '/invoices',
  '/payments',
  '/payments/subscription',
  '/payments/success',
  '/profile',
  '/audit',
  '/payments/subscription/cancel',
  '/landing',
  '/payments/subscription',
  '/ecommerce/payment_gateways',
  '/agency/options'
]
/**
 * Trigger `products updates` click in React
 * @event document#click
 */
export const handleOnClickAnnouncement = () =>
  document.querySelectorAll('.product-updates')[0].click()

/**
 * Get window location pathname
 * @return {string}
 */
export const getLocationPath = () => window.location.pathname

/**
 * Get window location href
 * @return {string}
 */
export const getLocationHref = () => window.location.href

/**
 * Get Back button visibility in Top Bar
 * @return {bool}
 */
export const getBackBtnVisibility = url => {
  const filter = list.includes(url)

  return filter
}

/**
 * Get side bar menu visibility
 * @return {bool}
 */
export const getSideBarAccountMenuVisibility = url => {
  const filter = list.includes(url)

  return filter
}

/**
 * Get settings pages urls
 * @return {bool}
 */
export const getSettingsPagesUrls = url => {
  const filter = list.includes(url)

  return filter
}

/**
 * Generate section name based on window.location.pathname
 * @return {string}
 */

export const generateSectionName = url => {
  if (url === '/profile') return <FormattedMessage id='word.your-profile' />
}

/**
 * HandleClickOnBack - go back
 * @return {function} history.back()
 */
export const handleClickOnBack = () => history.back()

/**
 * HandleActiveUrl
 * @return {function}
 */
export const handleActiveUrl = data => {
  const includesPath = getLocationPath(),
    hasDashboard = Boolean(document.getElementById('agencyDashboardClient')),
    filter = data.map(item => {
      const url = new URL(item.url).pathname,
        helperPath = includesPath.split('/')[1],
        helperUrl = item.url.split('/')[3],
        isActive =
          includesPath.includes(url) ||
          (helperPath === 'dashboard' && helperUrl === 'landings') ||
          (helperPath === 'welcome' && url === '/agency/dashboard') ||
          (helperPath === 'welcome' && !hasDashboard && url === '/landings')

      return {
        ...item,
        isActive
      }
    })

  return filter
}

/**
 * Replace url in browser, but not refresh page
 */
export const replaceUrl = (url, state = {}, title = '') =>
  window.history.pushState(state, title, url)

/**
 * Blocking the possibility of returning to the previous page
 * @param {!string} string
 * @returns {!string}
 */
export const blockPreviousStep = () => {
  history.pushState(null, document.title, location.href)

  window.addEventListener('previousStep', () => {
    history.pushState(null, document.title, location.href)
  })
}
