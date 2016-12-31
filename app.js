var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');

var app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

var PORT = process.env.PORT || 8080;

require("./app/routes.js")(app);

app.listen(PORT, function() {
  console.log("Server is running on port " + PORT);
});
