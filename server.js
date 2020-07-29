var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.all('*', function (req, res, next) {
  console.log('Accessing the secret section ...')
  console.log("Params:");
  console.log(req.params)
  next() // pass control to the next handler
}) 
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});


