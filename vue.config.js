const path = require('path')
module.exports = {
<<<<<<< HEAD
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
=======
    baseUrl: "/"
};

>>>>>>> 0cefdc1afd7c8cee0172cc8428e3c34f8d948413
