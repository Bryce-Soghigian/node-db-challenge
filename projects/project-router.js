const express = require("express");

// Import data model
const Projects = require("./projects.js");

const router = express.Router();

// Write CRUD operations
router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "You can't even get stuff right" });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;
  Projects.addProject(newProject)
    .then(projects => {
      res.status(201).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to add like jared who fails to read" });
    });
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;
  Projects.updateProject(body, id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to update FE team needs to write better code" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Projects.deleteProject(id)
    .then(projects => {
      res.status(202).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Buh-bye" });
    });
});


module.exports = router;