/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: ['class','[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // ### Primary
        "line-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",

        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "instagram-first": "hsl(37, 97%, 70%)",
        "instagram-second": "hsl(329, 70%, 58%)",
        "youtube": "hsl(348, 97%, 39%)",

        // #### Dark Theme
        "gradient-switch-first": "hsl(210, 78%, 56%)",
        "gradient-switch-second": "hsl(146, 68%, 55%)",

        // #### Light Theme

        // - Toggle: hsl(230, 22%, 74%)

        // ### Neutral

        // #### Dark Theme

        "very-dark-blue": "hsl(230, 17%, 14%)", //(BG)
        "very-dark-blue-top": "hsl(232, 19%, 15%)", //(Top BG Pattern)
        "dark-desaturated-blue": "hsl(228, 28%, 20%)", //(Card BG)
        "desaturated-blue": "hsl(228, 34%, 66%)", //(Text)
        // - White (Text): hsl(0, 0%, 100%)

        // #### Light Theme
        // - White (BG): hsl(0, 0%, 100%)
        "very-pale-blue": "hsl(225, 100%, 98%)", // (Top BG Pattern)
        "light-grayish-blue": "hsl(227, 47%, 96%)", //(Card BG)
        "dark-grayish-blue": "hsl(228, 12%, 44%)", //(Text)
        "very-dark-blue": "hsl(230, 17%, 14%)", //(Text)
      },

      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
