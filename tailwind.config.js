// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'portfolio-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #2c3e50 50%, #000000 75%, #ffffff 100%)',
        'custom-gradient': 'linear-gradient(135deg, #8A2BE2 0%, #4B0082 25%, #00008B 50%, #000000 75%, #FFFFFF 100%)',
      }
    },
  },
  plugins: [],
}