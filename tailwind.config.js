module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        outfit: "'Outfit', sans-serif",
      },
      colors:{
        primary:{
          softBlue: "hsl(215, 51%, 70%)",
          cyan: "hsl(178, 100%, 50%)",
        },
        neutral:{
          mainBG:"hsl(217, 54%, 11%)",
          cardBG:"hsl(216, 50%, 16%)",
          line:"hsl(215, 32%, 27%)",
          white:"hsl(0, 0%, 100%)",
        }
      },
    },
  },
  plugins: [],
}
