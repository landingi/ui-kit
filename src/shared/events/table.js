import {
  TABLE_FILTER_REFRESH,
  TABLE_LEADS_DATE_FILTER,
  TABLE_LEADS_FILTER,
  TABLE_LEADS_INBOX_FILTER,
  TABLE_LEADS_INBOX_FILTER_REFRESH,
  TABLE_LEADS_ISREAD_FILTER,
  TABLE_REFRESH,
  TABLE_RESET_PAGE
} from '@constants/eventTypes'
import emitter from '@lib/emitter'

export const emitTableRefresh = (...args) =>
  emitter.emit(TABLE_REFRESH, ...args)
export const emitTableFilterRefresh = (...args) =>
  emitter.emit(TABLE_FILTER_REFRESH, ...args)
export const emitTableLeadsFilter = (...args) =>
  emitter.emit(TABLE_LEADS_FILTER, ...args)
export const emitTableLeadsDateFilter = (...args) =>
  emitter.emit(TABLE_LEADS_DATE_FILTER, ...args)
export const emitTableLeadsIsReadFilter = (...args) =>
  emitter.emit(TABLE_LEADS_ISREAD_FILTER, ...args)
export const emitTableResetPage = (...args) =>
  emitter.emit(TABLE_RESET_PAGE, ...args)
export const emitTableLeadsInboxFilter = (...args) =>
  emitter.emit(TABLE_LEADS_INBOX_FILTER, ...args)
export const emitTableInboxFilterRefresh = (...args) =>
  emitter.emit(TABLE_LEADS_INBOX_FILTER_REFRESH, ...args)
