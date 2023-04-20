// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: [
   '@pinia/nuxt',
 ],
 css: [ '@/assets/scss/main.scss' ],
 ssr: false,
 app: {
   head: {
     title: 'Football Ticket | Home Assignment',
     htmlAttrs: {
       lang: 'en'
     },
     meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
     ],
     link: [
       { rel: 'icon', type: 'image/x-icon', href: '/svgs/logo.svg' }
     ]
   }
 },
 nitro: {
   serveStatic: true
 }
})
