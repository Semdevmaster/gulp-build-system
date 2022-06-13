/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    './app/core/app/**/*.tpl',
    './app/assets/v1/js/**/*.js'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1480px'
    },
    extend: {
      colors: {
        primary: '#23d1a9',
        secondary: '#235ad1',
        accent: '#f57f17',
        error: '#ff5722',
        warning: '#ffc107',
        info: '#607d8b',
        success: '#4caf50',
      },
      fontFamily: {
        'first': [
          'Roboto',
          'sans-serif'
        ],
        'second': [
          'OpenSans',
          'sans-serif'
        ]
      },
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
