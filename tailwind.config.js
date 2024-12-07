module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#c3423e',  // Custom Red
        secondary: '#2c3e50', // Dark Blue (Navy)
        accent: '#f39c12',    // Yellow accent
        background: '#ecf0f1', // Light gray background
        text: '#34495e',       // Dark text
      },
    },
  },
  plugins: [],
};
