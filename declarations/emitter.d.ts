import TinyEmitter from 'tiny-emitter'

declare module 'tiny-emitter' {
  const type: ReturnType<TinyEmitter>

  export default type
}
