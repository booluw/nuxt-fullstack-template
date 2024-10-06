// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  tailwindcss: {
    configPath: '~/config/tailwind.ts'
  },
  components: [
    {
      path: '~/components'
    }
  ],
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  piniaPluginPersistedstate: {
    storage: 'sessionStorage'
  }
})