const express = require("express");


const Tasks = require("./task.js");

const router = express.Router();


router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "You don't have to do chores if you never GET them" });
    });
});

router.post("/", (req, res) => {
  const newTask = req.body;
  Tasks.addTask(newTask)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "can't add . Its like that time you were at the restaurant and miscalculated the tip like a proper bafoon" });
    });
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;
  Tasks.updateTask(body, id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Is the wifi gone? Failed to update" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Tasks.deleteTask(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Yeet he ded you deleted the delete" });
    });
});


module.exports = router;