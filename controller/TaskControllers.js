const Tasks = require("../models/TaskModels");

exports.renderHomePage = (req, res) => {
  Tasks.get(tasks => {
    res.render("home", { tasks });
  });
};

exports.addTask = (req, res) => {
  console.log(req.body);
  const task = new Tasks(req.body.title);
  task.save();
  res.redirect("/");
};
