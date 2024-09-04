/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F0EFEB",
        secondary: "#6A6E49",
        third: "#F0EFEB",
        fourth: "#E5E8D5",
        background: "#F1F1F1",
      },
      fontFamily: {
        primary: "Playfair Display, serif",
        secondary: "Poppins, sans-serif"
      },
      fontSize: {
        "xxxl": "250px",
      }
    },
  },
}