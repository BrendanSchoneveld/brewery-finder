const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/maps-api", {
      target: "https://maps.googleapis.com/",
      pathRewrite: { "^/maps-api": "" },
      changeOrigin: true
    })
  );
};
