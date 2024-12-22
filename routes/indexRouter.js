const { Router } = require("express");

const indexRouter = Router();
const db = require("../db");
let messages = db.messages;

indexRouter.get("/", (req, res) =>
  res.render("index", { messages: messages, links: req.app.locals.links })
);
indexRouter.post("/new", (req, res) => {
  messages.push({
    id: messages.length + 1,
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  console.log(messages);
  res.redirect("/");
});
module.exports = indexRouter;
