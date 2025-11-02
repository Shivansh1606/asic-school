/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0C2E5C',
        'golden-yellow': '#FDB813',
      },
    },
  },
  plugins: [],
}
