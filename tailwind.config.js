/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ECE8DE',
        'gold': '#E2B20B',
        'title': '#ECE8DE',
        'description': '#B0ACA2',
        'blue': '#0A2C61',
        'prussian': '#1C2E3F',
        'darkBlue': '#020123',
        'blueDisabled': '#383451',
        'black': '#1B1A18'
      },
      textColors: {
        'white': '#ECE8DE',
        'gold': '#E2B20B',
        'title': '#ECE8DE',
        'description': '#B0ACA2',
        'blue': '#0A2C61',
        'prussian': '#1C2E3F',
        'darkBlue': '#020123',
        'blueDisabled': '#383451',
        'black': '#1B1A18'
      }

    },
    fontFamily: {
      inter400: ['Inter-Regular', 'sans-serif'],
      inter600: ['Inter-SemiBold', 'sans-serif'],
      inter800: ['Inter-ExtraBold', 'sans-serif'],
      poppins400: ['Poppins-Regular', 'sans-serif'],
      poppins600: ['Poppins-SemiBold', 'sans-serif'],
    }
  },
  plugins: [],
}

