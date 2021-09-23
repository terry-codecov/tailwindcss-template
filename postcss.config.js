const pfm = require("postcss-font-magician");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    // https://github.com/csstools/postcss-font-magician
    // Easier custom font loading, If the font name has spaces you need
    // to wrap in "". Example: "Roboto Condensed"
    pfm({
      variants: {
        Roboto: {
          300: [],
          400: [],
          700: [],
        },
      },
      foundries: ["google"],
    }),
  ],
};
