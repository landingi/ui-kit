import TinyEmitter from 'tiny-emitter'

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module 'tiny-emitter' {
  const type: ReturnType<TinyEmitter>

  export default type
}
