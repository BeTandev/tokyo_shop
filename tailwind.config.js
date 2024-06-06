/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';


export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      screen:{
        'xs': '480px'
      },
      fontSize:{
        'xs': "12px",
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
  plugins: [],
});
