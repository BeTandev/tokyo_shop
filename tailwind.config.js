import prelinePlugin from 'preline/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js',"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontSize:{
        xs: "12px",
      },
      colors: {
        "main-brown": "#867566",
        "second-brown": "#E9E2D5",
        "grey-bg": "#FBFBFB",
        "footer-bg": "#E9E2D5",
        "main-green": "#7BA740"
      },
    },
  },
  plugins: [
    prelinePlugin
  ],
};
