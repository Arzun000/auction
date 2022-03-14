module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "sh-search": "0 25px 50px -12px rgba(0, 0, 0, 0.25);",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      lgx: "24px",
      full: "9999px",
      large: "12px",
    },
  },
  backgroundImage: {
    "hero-slider": "url('/images/automotive_slider.JPG')",
    // 'footer-texture': "url('/img/footer-texture.png')",
  },
  plugins: [],
};
