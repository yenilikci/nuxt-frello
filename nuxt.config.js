import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "Frello",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/styles.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/filters"],

  router: {
    middleware: ["auth"],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyBPcEwWbsmRpl5CBR2yjQCuoDTkw4UI4cQ",
          authDomain: "frello-4030f.firebaseapp.com",
          projectId: "frello-4030f",
          storageBucket: "frello-4030f.appspot.com",
          messagingSenderId: "1051542740963",
          appId: "1:1051542740963:web:9169e83b1e923b42380ad6",
        },
        services: {
          auth: {
            persistence: "local", // default
            initialize: {
              onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
              onAuthStateChangedAction: "onAuthStateChangedAction",
              subscribeManually: false,
            },
            ssr: false, // default
          },
          firestore: true,
          storage: true,
        },
      },
    ],
  ],
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
