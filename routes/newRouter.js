const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => res.send("Form Page"));

module.exports = newRouter;
