/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2aa7ff",
        secondary: "#ebf3ff",
      },
      fontFamily: {
        display: "Poppins, ui-sans-serif,sans-serif",
      },
    },
  },
  plugins: [],
});
