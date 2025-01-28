/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        blender: ['"Blender Pro"', 'sans-serif'],
      },
      screens: {
        'xxs': '320px', // Extra extra small screens
        'xs': '480px',  // Extra small screens
        'sm': '640px',  // Small screens
        'md': '768px',  // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra large screens
        '2xl': '1536px' // 2x Extra large screens
      },
      // cursor: {
      //   custom: 'url(/src/assets/cursor.png), pointer', // Replace with your cursor file path
      // },
    },
  },
  plugins: [],
}
