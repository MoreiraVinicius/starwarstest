const path = require('path')
module.exports = {
    baseUrl: "/",
    /*css: {
        loaderOptions: {
          sass: {
            data: `@import "@/scss/banner/_variables.scss";`
          }
        }
    },*/
    configureWebpack: {
        resolve: {
            alias: {
                scss: path.resolve(__dirname, './src/scss')
            }
        }
    }
}