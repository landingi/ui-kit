import { TOGGLE_TOAST, TOGGLE_TIMING_TOAST } from 'shared/constants/eventTypes'
import emitter from 'shared/lib/emitter'

export const emitToastToggle = (...args) => emitter.emit(TOGGLE_TOAST, ...args)
export const emitTimingToastToggle = (...args) =>
  emitter.emit(TOGGLE_TIMING_TOAST, ...args)
