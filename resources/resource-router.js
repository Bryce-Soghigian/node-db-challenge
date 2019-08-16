const express = require("express");
const Resources = require("./resources")
const router = express.Router();


router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "The goods haven't been retrived" });
    });
});




router.post("/", (req, res) => {
  const Resource = req.body;
  Resources.addResource(Resource)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't add" });
    });
});




router.put("/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;
  Resources.updateResource(body, id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Couldn't Update" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Resources.deleteResource(id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed Delete" });
    });
});

module.exports = router;