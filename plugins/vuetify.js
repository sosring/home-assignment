//import { createVuetify } from "vuetify/lib/framework.mjs";

// styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'

// vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme = {
  colors: {
    background: '#FFFFFF',
    primary: '#D3D5D7',
    accent: '#BCED24',
    footer: '#0D0033'
  } 
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: lightTheme,
        variables: {}
      }
    },
    defaults: {
      global: {
        ripple: false,
        flat: true
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
