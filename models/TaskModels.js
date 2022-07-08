const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

class Tasks {
  constructor(title) {
    this.title = title;
    this.createdAt = new Date().toISOString();
    this.checked = false;
    this.id = uuid();
  }

  save() {
    fs.readFile(
      path.join(__dirname, "..", "data", "tasks.json"),
      (error, data) => {
        if (error) throw error;

        const tasks = JSON.parse(data);
        tasks.push(this);

        fs.writeFile(
          path.join(__dirname, "..", "data", "tasks.json"),
          JSON.stringify(tasks),
          error => {
            if (error) throw error;
          }
        );
      }
    );
  }

  static get(cb) {
    fs.readFile(
      path.join(__dirname, "..", "data", "tasks.json"),
      (error, data) => {
        if (error) throw error;

        const tasks = JSON.parse(data);
        return cb(tasks);
      }
    );
  }
}

module.exports = Tasks;
