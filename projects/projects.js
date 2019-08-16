const db = require("../db-config.js");


module.exports = {
  getProjects,
  addProject,
  updateProject,
  deleteProject
};

function getProjects() {
  return db("projects");
}

function addProject(newProject) {
  return db("projects").insert(newProject, "id");
}

function updateProject(changes, id) {
  return db("projects")
    .update(changes)
    .where({ id });
}

function deleteProject(id) {
  return db("projects")
    .del()
    .where({ id });
}