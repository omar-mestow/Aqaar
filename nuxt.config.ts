import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";




export default defineNuxtConfig({
  modules: ["nuxt-swiper", "@invictus.codes/nuxt-vuetify", "@pinia/nuxt","@nuxtjs/tailwindcss"],
  css: [
    "@/assets/styles/scss/custom.scss",
    "@/assets/styles/scss/animate/animate.min.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "awesome-notifications/dist/style.css",
  ],
  app: {
    head: {
      title: "Aqaar",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Ecommerce Site" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "icon",
          href: "/logo.png",
          type: "image/x-icon",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:7000/api/",
      api: {
      },
    },
  },
  
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
});
