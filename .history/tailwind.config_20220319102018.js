module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  resolve: {
    extensions: [".jsx", ".js"],
  },
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      boxShadow: {
        "sh-search": "rgba(0, 0, 0, 0.2) 0px -10px 30px -10px;",
        "sh-search1": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        "box-sh": "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
        //shopgridcol: "repeat(3, (1fr, 2fr))",
        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
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
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      secttl: ["34px", "40px"],
    },
    fontWeight: {
      hairline: 100,
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
  },
  backgroundImage: {
    "hero-slider": "url('/images/automotive_slider.JPG')",
    // 'footer-texture': "url('/img/footer-texture.png')",
  },
};
