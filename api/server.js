const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const config = require("./config");
const { MongoManager } = require("./src/mongo");
const api = require("./src/api");



const app = express();
const mongoManager = new MongoManager(config);
global.__basedir = __dirname;
//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(morgan("dev"));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));
app.use(cookieParser());

mongoManager.connect();


app.use("/speleo", api(config));
app.use(express.static(path.join(__dirname, "/public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/build/", "index.html"));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
