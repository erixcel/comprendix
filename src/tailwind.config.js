module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chau': ['Chau Philomene One', 'sans-serif'],
        'hammer': ['Hammersmith One', 'sans-serif'],
        'winky': ['Winky Rough', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
        'passion': ['Passion One', 'sans-serif'],
        'russo': ['Russo One', 'sans-serif'],
      },
      strokeWidths: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const utilities = {}

      const colors = theme('colors')
      for (const [colorName, shades] of Object.entries(colors)) {
        if (typeof shades === 'object') {
          for (const [shade, colorValue] of Object.entries(shades)) {
            const className = `.text-out-color-${colorName}-${shade}`
            utilities[className] = {
              '-webkit-text-stroke-color': colorValue,
            }
          }
        }
        else {
          const className = `.text-out-color-${colorName}`
          utilities[className] = {
            '-webkit-text-stroke-color': shades,
          }
        }
      }

      const strokeWidths = theme('strokeWidths')

      for (const [key, value] of Object.entries(strokeWidths)) {
        utilities[`.text-out-w-${key}`] = {
          '-webkit-text-stroke-width': value,
        }
      }
      addUtilities(utilities, {
        respectPrefix: false,
        respectImportant: false,
      })
    }
  ],
}
