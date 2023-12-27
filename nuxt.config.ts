// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'bootstrap-icons/font/bootstrap-icons.css'], // Add Bootstrap Icons CSS

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  buildModules: ["@nuxt/image"], // Use buildModules instead of modules
})
