const express = require("express");

const Router = express.Router();

const taskControllers = require("../controller/TaskControllers");

Router.get("/", taskControllers.renderHomePage);

module.exports = Router;
