module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: {
        100: '#E8EDFF',
        200: '#BFCDFF',
        300: '#95ADFF',
        400: '#436CFF',
        base: '#194BFB'
      },
      secondary: {
        100: '#F2F6FF',
        200: '#D8E3F8',
        300: '#96A3BE',
        400: '#5D6A83',
        base: '#1A202C'
      },
      error: {
        light: '#FF7171',
        base: '#FF4747',
        dark: '#DD3333'
      },
      warning: {
        light: '#FDE047',
        base: '#FACC15',
        dark: '#EAB308'
      },
      success: {
        light: '#4ADE80',
        base: '#22C55E',
        dark: '#16A34A'
      },
      grayscale: {
        900: '#1a202c',
        800: '#232b38',
        700: '#2a313c',
        600: '#718096',
        500: '#a0aec0',
        400: '#cbd5e0',
        300: '#e2e8f0',
        200: '#edf2f7',
        100: '#f7fafc',
        50: '#fafafa',
        0: '#ffffff'
      }
    },
    fontSize: {
      "2xs": "0.625rem",
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem"
    },
    fontFamily: {
      font: ['Manrope', 'sans-serif']
    },
    borderRadius: {
      none: '0',
      xs: '0.0625rem',
      sm: '0.375rem',
      default: '0.75rem',
      lg: '1rem',
      xl: '3.125rem',
      full: '9999px'
    },
    extend: {
      keyframes: {
          carousel: {
              '0%': {transform: 'translate(0px)'},
              '28%': {transform: 'translate(0px)'},
              '35%': {transform: 'translate(-639px)'},
              '61%': {transform: 'translate(-639px)'},
              '68%': {transform: 'translate(-1278px)'},
              '93%': {transform: 'translate(-1278px)'},
              '100%': {transform: 'translate(0px)'},
          },
          blob: {
            '0%': {width: '24px', opacity: '1'},
            '28%': {width: '24px', opacity: '1'},
            '35%': {width: '6px', opacity: '0.5'},
            '93%': {width: '6px', opacity: '0.5'},
            '100%': {width: '24px', opacity: '1'},
          }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}