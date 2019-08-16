const db = require("../db-config.js");


module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};


function getTasks() {
  return db("tasks");
}

function addTask(newTask) {
  return db("tasks").insert(newTask, "id");
}

function updateTask(changes, id) {
  return db("tasks")
    .update(changes)
    .where({ id });
}

function deleteTask(id) {
  return db("tasks")
    .del()
    .where({ id });
}