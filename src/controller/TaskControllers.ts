import { RequestHandler } from "express";

const Tasks = require("../models/TaskModels");

export const renderHomePage: RequestHandler = (req, res) => {
  Tasks.get((tasks: any[]) => {
    res.render("home", { tasks });
  });
};

export const addTask: RequestHandler = (req, res) => {
  console.log(req.body);
  const task = new Tasks(req.body.title);
  task.save();
  res.redirect("/");
};

export const checkTask: RequestHandler = (req, res) => {
  Tasks.checkTask(req.params.id);
  console.log(req.params.id);
};
