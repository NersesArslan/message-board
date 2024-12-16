const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) =>
  res.render("new", { links: req.app.locals.links })
);

module.exports = newRouter;
