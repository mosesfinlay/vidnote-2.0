const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// Require all main routes
const routes = require("./routes/");

app.use(bodyParser.json());

// Set port to listen on
const port = process.env.PORT || 5000;

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// Connect to the database
mongoose.connect("mongodb://localhost:27017/vdnote");

const db = mongoose.connection;

// Handle database connection error
db.on("error", err => console.error(`DB Connection Error: ${err}`));

// On database connection
db.once("open", () => console.log("DB Connection Successful"));

// Use main routes
app.use(routes);

// Not Found (404) Route
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

// Listen on the set port
app.listen(port, () => console.log(`The app is listening on port: ${port}`));