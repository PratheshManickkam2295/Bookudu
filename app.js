const express = require("express");
const APP_SERVER = express();

// Register All The Controllers in APP_SERVER:

APP_SERVER.use("/files", require("./Controllers/Files.controllers"));
APP_SERVER.use("/todos", require("./Controllers/Todos.Controllers"));
APP_SERVER.use("/users", require("./Controllers/Users.controller"));

module.exports = APP_SERVER;
