module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '4.5': '1.125rem'
      },
      fontFamily: {
        sans: [
          '"HK Grotesk"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      strokeWidth: {
        '3': '3',
        '4': '4'
      },
      maxWidth: {
        custom: '1400px'
      },
      letterSpacing: {
        widest: '0.15em'
      },
      fontSize: {
        sm: '0.9rem',
        title: [
          '2.7rem',
          {
            letterSpacing: '0.1em',
            lineHeight: '1.1'
          }
        ]
      }
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
    }
  },
  plugins: []
}
