export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  future: {
    compatibilityVersion: 4,
  },
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/seo", "@nuxtjs/tailwindcss"],
  site: {
    defaultLocale: "nl",
    name: "Play-ER",
    url: "https://www.play-er.be",
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Roboto", "sans-serif"],
          },
        },
      },
    },
  },
});
