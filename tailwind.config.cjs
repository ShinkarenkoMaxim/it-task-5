/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: { center: true },
    extend: {
      gridTemplateColumns: {
        accountRow: '0.5fr 1fr 1fr 1.75fr 0.75fr',
      },
    },
  },
  plugins: [],
};
