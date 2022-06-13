import { CLOSE_DROPDOWN } from '@constants/eventTypes'
import emitter from '@lib/emitter'

export const emitCloseDropdown = (...args) =>
  emitter.emit(CLOSE_DROPDOWN, ...args)
