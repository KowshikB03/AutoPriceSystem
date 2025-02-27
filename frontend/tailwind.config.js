/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans all JSX and TSX files in the src folder
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
