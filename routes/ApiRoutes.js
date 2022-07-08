const express = require("express");

const Router = express.Router();

const taskControllers = require("../controller/TaskControllers");

Router.post("/addTask", taskControllers.addTask);

module.exports = Router;
