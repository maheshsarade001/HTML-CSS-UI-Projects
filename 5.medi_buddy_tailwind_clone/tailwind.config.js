/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        aa: "linear-gradient(#fbea86 0,#fbea86 8%,#fbea86 30%,#fbea86 40%,transparent 80%),linear-gradient(#fff 0,#e0af21 8%,#e0af21 25%,#e0af21 62.5%,#e0af21 100%)",
      },
      background: {
        test: "linear-gradient(#fbea86 0,#fbea86 8%,#fbea86 30%,#fbea86 40%,transparent 80%),linear-gradient(#fff 0,#e0af21 8%,#e0af21 25%,#e0af21 62.5%,#e0af21 100%)",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
