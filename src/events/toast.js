import { TOGGLE_TIMING_TOAST, TOGGLE_TOAST } from '@constants/eventTypes'
import emitter from '@lib/emitter'

export const emitToastToggle = (...args) => emitter.emit(TOGGLE_TOAST, ...args)
export const emitTimingToastToggle = (...args) =>
  emitter.emit(TOGGLE_TIMING_TOAST, ...args)
