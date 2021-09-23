const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  theme: {
    container: {
      center: true,
    },
    debugScreens: {
      position: ["bottom", "right"],
    },
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ["Roboto"],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
  purge: ["./src/**/*.{html,htm,js}", "./src/*.{html,htm,js}"],
};
