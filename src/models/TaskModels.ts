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

  static findTask(id: string, cb: (task: any) => void) {
    fs.readFile(
      path.join(__dirname, "..", "data", "tasks.json"),
      (error, data) => {
        const tasks = JSON.parse(data.toString());
        const foundedTask = tasks.find((task: any) => task.id === id);

        return cb(foundedTask);
      }
    );
  }

  static checkTask(id: string) {
    fs.readFile(
      path.join(__dirname, "..", "data", "tasks.json"),
      (error, data) => {
        if (error) throw error;

        const tasks = JSON.parse(data.toString());
        const foundedTask = tasks.find((task: any) => task.id === id);
        foundedTask.checked = !foundedTask.checked;

        const filteredTasks = tasks.filter(
          (task: any) => task.id !== foundedTask.id
        );
        const mergedTasks = [...filteredTasks, foundedTask];

        fs.writeFile(
          path.join(__dirname, "..", "data", "tasks.json"),
          JSON.stringify(mergedTasks.sort((a: any, b: any) => a.checked)),
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
