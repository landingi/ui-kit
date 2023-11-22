import { CLOSE_DROPDOWN, CLOSE_INNER_DROPDOWN } from '@constants/eventTypes'
import emitter from '@lib/emitter'

export const emitCloseDropdown = (...args: unknown[]) =>
  emitter.emit(CLOSE_DROPDOWN, ...args)

export const emitCloseInnerDropdown = (...args: unknown[]) =>
  emitter.emit(CLOSE_INNER_DROPDOWN, ...args)
