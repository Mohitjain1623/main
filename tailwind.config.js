/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#2A2829",
        'primary': "#FFFFFF",
        'active': "#C69C72",
      },
    },
  },
  plugins: [],
}