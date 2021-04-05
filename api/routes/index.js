const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes")
const linkRouter = require("./LinksRoutes")


router.get("/ping", (req, res) => res.send("pong"))
router.use("/user", userRouter)
router.use("/link", linkRouter)



module.exports = router;
