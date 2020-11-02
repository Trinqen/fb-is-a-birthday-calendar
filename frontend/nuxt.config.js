export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Facebook is a birthday calendar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/element-ui'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBzZW7aBv9fau_ERsBzYubykiJCy3nk8lE',
          authDomain: 'birthday-extractor.firebaseapp.com',
          databaseURL: 'https://birthday-extractor.firebaseio.com',
          projectId: 'birthday-extractor',
          storageBucket: 'birthday-extractor.appspot.com',
          messagingSenderId: '641172329375',
          appId: '1:641172329375:web:7b8a379a5121576ebfe3aa',
          measurementId: 'G-5KNQ803RZX',
        },
        services: {
          functions: true
        },
      },
    ],
  ],

  axios: {
    baseURL: 'https://us-central1-birthday-extractor.cloudfunctions.net/api',
    // baseURL: 'http://localhost:5001/birthday-extractor/us-central1/api'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
  },
}
