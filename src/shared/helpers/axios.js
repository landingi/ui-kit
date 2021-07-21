import { handleError } from 'shared/services/messages/errors'
import { sentryScope } from 'shared/external/sentry'
import { APP_ENV } from 'shared/config'

/**
 * parse error response
 * @function
 * @param {Error} error - Error to parse
 * @returns {Promise} - Contains the error object
 */
export const parseError = error => {
  if (!error.response) return

  let errorResponseUrl

  APP_ENV === 'production' && sentryScope(error)

  if (error && error.response) {
    errorResponseUrl = error.response.request.responseURL
  }

  // Page optimizer
  if (error.response.status === 400 && errorResponseUrl.match(/analysis/gi)) {
    if (
      error.response.data?.error?.code === 404 ||
      error.response.data?.error?.code === 408 ||
      error.response.data?.error?.code === 413 ||
      error.response.data?.error?.code === 422
    ) {
      return Promise.reject(error.response.data.error.code)
    }
  }

  if (error.response.status === 409 && errorResponseUrl.match(/groups/gi)) {
    return Promise.reject(error.response.data)
  }

  if (error.response.status === 400 && errorResponseUrl.match(/export-leads/gi)) {
    return Promise.reject(error.response.data)
  }

  if (error.response.status === 400 && errorResponseUrl.match(/subaccount\/create/gi)) {
    return Promise.reject(error.response.data)
  }

  if (error.response.status === 400 && errorResponseUrl.match(/subaccount\/.+\/remove/gi)) {
    return Promise.reject(error.response.data)
  }

  if (error.response.status === 409 && errorResponseUrl.match(/agency\/users/gi)) {
    return Promise.reject(error.response.data)
  }

  if (error.response.status === 400 && errorResponseUrl.match(/edit-details/gi)) {
    return Promise.reject(error.response.data)
  }

  if (error.response.status === 403 && errorResponseUrl.match(/v2\/domains/gi)) {
    return Promise.reject(error.response)
  }

  // Payment gateways
  if (error.response.status === 422 && errorResponseUrl.match(/v2\/ecommerce/gi)) {
    return Promise.reject(error.response.data.error.code)
  }

  if (error.response.status === 422 && errorResponseUrl.match(/v2\/domains/gi)) {
    return Promise.reject(error.response.data.error)
  }

  if (error.response) {
    handleError(error)

    return Promise.reject(error.response.data)
  }

  return Promise.reject(error)
}

/**
 * CSRF token metatag selector
 * @function
 * @returns {string} - Contains csrf value
 */
export const getMetaTagCsrf = () => document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')

/**
 * App domain metatag selector, it's exposed in DOM by backend.
 * We need it in order to call public API app.domainnamefrommetaga.com
 * @function
 * @returns {string} - Contains app_domain value
 */
export const getMetaTagAppDomain = () => document.querySelector('meta[name="app_domain"]')?.getAttribute('content')

/**
 * editor domain meta tag selector, it's exposed in DOM by backend.
 * We need it in order to call public API editor.domainnamefrommetaga.com
 * @function
 * @returns {string} - Contains editor_domain value
 */
export const getMetaTagEditorDomain = () => document.querySelector('meta[name="editor_domain"]')?.getAttribute('content')
