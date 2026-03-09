/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F5F2ED",
        sage: "#4A5D4E",
        charcoal: "#2D2D2D"
      },
      fontFamily: {
        serif: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
        sans: ['system-ui', 'ui-sans-serif', 'sans-serif']
      }
    }
  },
  plugins: []
};

