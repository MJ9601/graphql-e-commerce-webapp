/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceX: {
          " 0%, 100%": {
            transform: "translateX(-20%)",
            "animation-timing-function": "cubic-bezier(.8, 0,1,1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(.0, 0,0.2,1)",
          },
        },
      },
      animation: {
        bounceX: "bounceX 1s infinite",
      },
    },
  },
  plugins: [],
};
