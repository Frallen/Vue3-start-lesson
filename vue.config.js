const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {

    loaderOptions: {
      less: {
        additionalData : `@import "@/styles/_variables.less" ;@import "@/styles/_mixins.less";`,
      },
    },
  },
});
