export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Best Marketing Agency in Dubai, UAE | ICON Advertising",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "p:domain_verify", content: "edb35027c7b02f730c5fbea295b14924" },
      { hid: 'og:image', property: 'og:image', content: "/icon.png" },
      {
        hid: "title",
        name: "title",
        content: "Best Marketing Agency in Dubai, UAE | ICON Advertising"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Welcome to Icon Advertising, a Full Service Creative Advertising Agency in Dubai. We solve marketing challenges with urgency & digital expertise. Contact us now"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "marketing strategy, graphic design, brochure design, advertising agencies in dubai, advertising companies in dubai, branding agency dubai, digital marketing agency dubai, digital marketing companies dubai, event management companies in dubai, event companies in dubai, digital marketing, web design, seo company dubai, web development companies in dubai, web design company dubai, digital agency dubai, creative agency dubai, motion graphics, 3d rendering, social media strategy"
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/style.css",
    "~/assets/css/fonts.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-tel-input"},
    { src: "~/plugins/vimeo-player", mode: "client" },
    { src: "~/plugins/vue-carousel", mode: "client" },
    { src: "~/plugins/vue-siema", mode: "client" },
    { src: "~/plugins/vue-scroll", mode: "client" },
    { src: "~/plugins/vue-progressive-image", mode: "client" },
    { src: "~/plugins/vue-gsap", mode: "client" },
    { src: "~/plugins/vue-smooth-scrollbar", mode: "client" },
    { src: "~/plugins/vue-easy-lightbox", mode: "client" },
    { src: "~/plugins/vue-masonry", mode: "client" }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    'nuxt-ssr-cache',
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    middleware: ["visit"],
  },

  axios: {
    baseURL: 'https://drupal.icon-ad.com/api', // Used as fallback if no runtime config is provided
  },

  server: {
    port: 4500 // default: 3000
  },

  loading: {
    color: '#A97DEC',
    height: '3px'
  },

  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],
    store: {
      type: 'memory',
      max: 100,
      ttl: 60,
    },
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://advertising.icon-ad.com',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      '/',
      '/projects',
      '/expertise',
      '/expertise/advertising',
      '/expertise/storytelling',
      '/expertise/design',
      '/expertise/strategy',
    ].map(route => ({
      url: route,
      changefreq: 'monthly',
      priority: 1,
      lastmodISO: new Date().toISOString().split('T')[0]
    }))
  },

  gtm: {
    id: 'GTM-MV67C85', // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },




}
