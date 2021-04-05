const express = require("express");
const router = express.Router();

const { getLinks ,addLink} = require("./controllers/linksController")  

router.post("/add", addLink)
router.get("/:id", getLinks)

module.exports = router;
