module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
  })
  },
}
