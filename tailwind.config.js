/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl':'1920px',
       
      },

      colors: {
      // primary color
      "primary-50":"#ffeeee",
      "primary-100":"#ffdada",
      "primary-200":"#ffbbbb",
      "primary-300":"#ff8b8b",
      "primary-400":"#ff4949",
      "primary-500":"#ff1111",
      "primary-600":"#ff0000",
      "primary-700":"#e70000",
      "primary-800":"#be0000",
      "primary-900":"#980000",
      "primary-950":"#560000",

      // gray color
      "gray-50":"#f6f7f9",
      "gray-100":"#eceef2",
      "gray-200":"#d4dae3",
      "gray-300":"#aebacb",
      "gray-400":"#8294ae",
      "gray-500":"#627795",
      "gray-600":"#4e607b",
      "gray-700":"#404d64",
      "gray-800":"#384354",
      "gray-900":"#323a48",
      "gray-950":"#282e3a",

      // error color
      "error-50":"#FFF2F1",
      "error-100":"#FFE1DF",
      "error-600":"#ED2115",
      "error-700":"#C8180D",

      // success color
      "success-50":"#F4FAF3",
      "success-100":"#E4F5E3",
      "success-400":"#5CB85C",
      "success-500":"#45A245",

       // warning color
       "warning-50":"#FFFBEA",
       "warning-100":"#FFF1C5",
       "warning-400":"#FFB91B",
       "warning-500":"#FF9500",
      },

       container : {
        screens : {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1367px',

        }
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

