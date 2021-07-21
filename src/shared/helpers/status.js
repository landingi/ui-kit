import { FormattedMessage } from 'react-intl'
import React from 'react'

/**
* Maps the order status with i18n { key: translation }
* @return {object}
*/
export const orderStatusMap = {
  completed: 'status.completed',
  canceled: 'status.canceled'
}

/**
* Maps the transaction status with i18n { key: translation }
* @return {object}
*/
export const orderTransactionStatusMap = {
  new: <FormattedMessage id='status.new' />,
  success: <FormattedMessage id='status.success' />,
  canceled: <FormattedMessage id='status.canceled' />,
  rejected: <FormattedMessage id='status.rejected' />,
  completed: <FormattedMessage id='status.completed' />,
  open: <FormattedMessage id='status.open' />
}

/**
* Maps the transaction status with type of badge(accent-n)
* @return {object}
*/
export const orderTransactionStatusAccentMap = {
  new: 'info',
  success: 'paid',
  canceled: 'canceled',
  rejected: 'canceled',
  completed: 'paid',
  open: 'info'
}
