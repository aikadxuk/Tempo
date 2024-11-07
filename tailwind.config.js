/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        upAnimation: {
          "0%": {
            top: "50px",
            opacity: "0",
          },
          "100%": {
            top: "30px",
            opacity: "1",
          },
        },
      },
      animation: {
        upAnimation: "upAnimation .5s ease-in-out",
      },
    },
    screens: {
      sm: "540px",
      md: "880px",
    },
    fontSize: {
      genericText: "clamp(1rem, 2vw, 1.5rem)",
      mainTitle: "clamp(2rem, 3.5vw, 2.8rem)",
      normaTitle: "clamp(.9rem, 2vw, 1.1rem)",
      normalSmallText: "clamp(.8rem, 3vw, .9rem)",
    },
  },
  plugins: [],
};
