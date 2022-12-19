import { apiEndpoint } from "./sm.json";

export default {
  buildModules: ["@nuxtjs/prismic", "@nuxt/postcss8"],
  prismic: {
    endpoint: apiEndpoint,
    modern: true,
    /* see configuration for more */
    apiOptions: {
      routes: [
        // Resolves the Homepage document to "/"
        {
          type: "home_page",
          path: "/",
        },
        {
          type: "post",
          path: "/:uid",
        },
      ],
    },
  },
  build: {
    transpile: ["@prismicio/vue"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  css: ["main.css"],
};
