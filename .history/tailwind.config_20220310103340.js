module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      boxShadow: {
        "sh-search": "rgba(0, 0, 0, 0.2) 0px -10px 30px -10px;",
        "sh-search1": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
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
};
