/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Kazumi's warm palette
        primary: {
          50: '#fdf8f3',
          100: '#f9ede2',
          200: '#f0d9c8',
          300: '#e6c5ad',
          400: '#d9a878',
          500: '#cc8c54', // Main warm tone
          600: '#b87641',
          700: '#9d6235',
          800: '#7a4a28',
          900: '#5c361e',
        },
        accent: {
          50: '#faf6f0',
          100: '#f3ede3',
          200: '#e8dcd2',
          300: '#dccac0',
          400: '#cfb7ad',
          500: '#c2a39a',
          600: '#a58678',
          700: '#886959',
          800: '#6b4f3f',
          900: '#4e3829',
        },
        sand: {
          50: '#fefdf8',
          100: '#faf7f0',
          200: '#f5efe5',
          300: '#e8dfd5',
          400: '#e1d8cd',
          500: '#d9cfc2',
          600: '#c4b9a8',
          700: '#a9998a',
          800: '#8d7e70',
          900: '#6b5f54',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
      },
    },
  },
  plugins: [],
}
