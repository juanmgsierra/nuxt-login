// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  publicRuntimeConfig:{
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
  },
  privateRuntimeConfig:{
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
  }
})
