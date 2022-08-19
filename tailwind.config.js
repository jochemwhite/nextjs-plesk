module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      main: "#69af08",
      "main-dark": "#333333",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
