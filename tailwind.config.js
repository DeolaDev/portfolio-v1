/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //"main-color": "#044A62",
        "main-color": "#013446",
        "accent-color": "#f5a2a2",
        "secondary-accent-color": "#fbf0f0",
        "navbar-color": "#012937",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
