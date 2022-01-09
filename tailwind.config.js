module.exports = {
  content: [
    './www/core/elements/**/*.tpl',
    './www/assets/js/**/*.js'
  ],
  darkMode: 'class',
  theme: {
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
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
