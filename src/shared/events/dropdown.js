import { CLOSE_DROPDOWN } from 'shared/constants/eventTypes'
import emitter from 'shared/lib/emitter'

export const emitCloseDropdown = (...args) => emitter.emit(CLOSE_DROPDOWN, ...args)
