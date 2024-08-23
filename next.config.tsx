// next.config.js
module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/danielvor/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/danielvor' : '',
  }
  