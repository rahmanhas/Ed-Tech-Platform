module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      width: {
        '800': '800px',
      },
      gradientColorStops: {
        'custom-gradient': ['#418CD1', '#9C41D1'],
      },
      color: {
        'custom-color': ['#6078EA'],
      },
    },
  },
  plugins: [require("daisyui")],
};
