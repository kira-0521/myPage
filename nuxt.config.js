export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'myPage',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // リセットCSS
    'modern-css-reset',
    // プロジェクト内の CSS ファイル
    '@/assets/css/main.css',
    // プロジェクト内の SCSS ファイル
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // クライアントサイドとサーバーサイドで共有される環境変数
    '@nuxtjs/dotenv',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 画像最適化
    '@aceforth/nuxt-optimized-images',
  ],
  // 画像最適化
  optimizedImages: {
    // 本番環境
    optimizeImages: true,
    // 開発環境
    optimizeImagesInDev: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
