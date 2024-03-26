/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}", // Adjusted path to match common React project structures
  ],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#F0F4C3",
        "custom-text": "#34568B",
      },
    },
  },
  plugins: [],
};
