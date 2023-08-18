/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FFFFFF",
        "secondary-100": "#dadada",
        "tertiary-100": "#000000",
      },
      backgroundImage: (theme) => (
        {
          "gradient-yellowred": "linear-gradient(90deg, #d4f1f9 0%, #edf9fc 100%)",
        }
      ),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        amatic: ["Amatic SC", "cursive"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
