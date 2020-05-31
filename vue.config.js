module.exports = {
  pwa: {
    name: 'Matrícula',
    themeColor: '#859D04',
    msTileColor: '#859D04',
  },
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}
