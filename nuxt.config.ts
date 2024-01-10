// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    // CSS file in the project
    '@/assets/css/style.css',
  ],
  app: {
    head: {
      title: 'roux cubing',
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ],
      noscript: [
        { children: 'Javascript is required' }
      ],
      htmlAttrs: [
        { lang: 'en' }
      ]
    }
  }
})
