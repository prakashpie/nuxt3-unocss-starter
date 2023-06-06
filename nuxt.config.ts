export default defineNuxtConfig({
  target: 'static',
  ssr: true,
  modules: [],
  experimental: {
    viewTransition: false,
  },
  devtools: {
    enabled: true,
  },
  components: false,
  buildModules: [],
  app: {
    baseURL: '/',
    cdnURL: '/',
    head: {
      title: 'Page Title',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
      links: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    layoutTransition: false,
    pageTransition: false,
    rootId: '__codepie',
  },
  css: [
    '@/assets/style/style.scss',
  ],
  routes: [],
})
