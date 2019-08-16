const express = require("express");
const helmet = require("helmet");

const ProjectsRouter = require("./projects/project-router");
const TasksRouter = require("./Tasks/Task-Router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectsRouter);
server.use("/api/tasks", TasksRouter);

module.exports = server;