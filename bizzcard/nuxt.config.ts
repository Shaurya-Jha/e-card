// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer:{},
    }
  },

  // css file
  css:[
    `~/assets/css/main.css`,
    'primevue/resources/themes/aura-light-green/theme.css'
  ],

  // modules
  modules: [
    'nuxt-primevue'
  ],
  // primevue config files
  primevue:{

  }
})
