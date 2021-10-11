module.exports = {
  // purge: ["./src/**/*.{html,ts}"],
  purge: {
    enabled: false,
    contents: ['./src/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
