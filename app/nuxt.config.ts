import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/ui-pro", "@nuxt/eslint"],
  vite: {
    plugins: [tailwindcss()],
  },
});
