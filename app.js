var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const cors = require("cors");
var logger = require("morgan");

var todosRouter = require("./routes/todos");
var foldersRouter = require("./routes/folders");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api/todos", todosRouter);
app.use("/api/folders", foldersRouter);
app.use("/api/users", usersRouter);

app.use(express.static(process.cwd() + "/public/"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});
app.get("*", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

module.exports = app;
