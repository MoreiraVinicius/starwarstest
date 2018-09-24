const path = require('path')
module.exports = {
    baseUrl: "/",
    configureWebpack: {
        resolve: {
            alias: {
                scss: path.resolve(__dirname, './src/scss')
            }
        }
    }
}