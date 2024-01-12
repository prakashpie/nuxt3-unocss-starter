import mitt from 'mitt'
import { defineNuxtPlugin } from 'nuxt/app'

type SampleEvent = {
  'view': string
}

export default defineNuxtPlugin(() => {
  const emitter = mitt<SampleEvent>()

  return {
    provide: {
      event: emitter.emit,
      listen: emitter.on,
    },
  }
})
