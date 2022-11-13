/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blueDS: {
          50: '#E9F1F8',
          100: '#D4E4F2',
          200: '#A8C9E5',
          300: '#7DADD7',
          400: '#5192CA',
          500: '#2677BD',
          600: '#1E5F97',
          700: '#174771',
          800: '#0F304C',
          900: '#081826',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}