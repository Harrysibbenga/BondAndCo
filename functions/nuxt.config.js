/* eslint-disable nuxt/no-cjs-in-config */
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Bond & Co Accountants',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, folow' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Bond & Co provides advice and helps support the growth of businesses across Bristol and the South West, and can deliver the services you need to help take the weight of financial administration off of your shoulders.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Bond & Co Accounting specialists' },
      {
        property: 'og:image',
        content: 'https://bondaccountants.co.uk/Bond_logo.png',
      },
      {
        property: 'og:description',
        content:
          'Bond & Co provides advice and helps support the growth of businesses across Bristol and the South West, and can deliver the services you need to help take the weight of financial administration off of your shoulders.',
      },
      { property: 'og:url', content: 'https://bondaccountants.co.uk' },
      { property: 'og:site_name', content: 'Bond & Co Accountants' },
      {
        property: 'twitter:title',
        content: 'Bond & Co Accounting specialists',
      },
      {
        property: 'twitter:description',
        content:
          'Bond & Co provides advice and helps support the growth of businesses across Bristol and the South West, and can deliver the services you need to help take the weight of financial administration off of your shoulders.',
      },
      {
        property: 'twitter:image',
        content: 'https://bondaccountants.co.uk/Bond_logo.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'http://bondaccountants.co.uk' },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-RRHTDQE2MF',
        async: true,
      },
      {
        hid: 'gtag',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RRHTDQE2MF');
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/assets/scss/main.scss'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    middleware: 'auth',
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#364799',
          secondary: '#707070',
          background: '#fff',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
