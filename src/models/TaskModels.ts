import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

class Tasks {
  private title: string;
  private createdAt: string;
  private checked: boolean;
  private id: string;

  constructor(title: string) {
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

        const tasks = JSON.parse(data.toString());
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

  static get(cb: (tasks: any[]) => void) {
    fs.readFile(
      path.join(__dirname, "..", "data", "tasks.json"),
      (error, data) => {
        if (error) throw error;

        const tasks = JSON.parse(data.toString());
        return cb(tasks);
      }
    );
  }
}

module.exports = Tasks;
