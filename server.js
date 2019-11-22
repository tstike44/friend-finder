var express = require("express");

var app = express();

// port setting that can be uploaded to heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//delivering static CSS
app.use(express.static(__dirname + "/app/css"));

//connecting to my routes folder
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);
// LISTENER

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
