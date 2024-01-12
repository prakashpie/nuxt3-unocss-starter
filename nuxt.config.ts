export default defineNuxtConfig({
  ssr: true,
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@nuxt/image'],
  plugins: [{ src: '@/plugins/event-bus.ts', mode: 'client' }],
  build: {
    transpile: [],
  },
  experimental: {
    viewTransition: true,
  },
  devtools: {
    enabled: true,
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      prefix: 'App',
    },
  ],
  image: {
    provider: 'ipx',
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    domains: [],
    quality: 80,
    format: ['webp'],
  },
})
