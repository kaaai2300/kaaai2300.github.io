// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    markdown: {
      tags: {
        p: "Paragraph",
        h1: "Heading1",
        h2: "Heading2",
        h3: "Heading3",
      }
    },
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-light'
    }
  }
})