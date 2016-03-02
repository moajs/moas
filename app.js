var app = require('base2')({
  // debug: true,
  // root:__dirname,
  "views": "app/views",
  "routes": "app/routes",
  // "public": "public",
})

// console.log(app);
// app.mount_routes(__dirname + '/routes2');
// app.mount_plugins(__dirname + '/plugins');

if (process.env.MOAS_HOME) {
  app.mount_routes(process.env.MOAS_HOME + '/app/routes');
}

module.exports = app;