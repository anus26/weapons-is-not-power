/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        // poppins: ["Poppins", "sans-serif"],
        // roboto: ["Roboto", "sans-serif"],
        // inter: ["Inter", "sans-serif"],

      },
    },
  },
  plugins: [],
}

