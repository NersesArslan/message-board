const { Router } = require("express");

const messageRouter = Router();
const db = require("../db");
let messages = db.messages;
const { getmessageById } = require("../controllers/messageController");

messageRouter.get("/", (req, res) => res.send("All messages"));

messageRouter.get("/:messageId", (req, res) => {
  res.render("message", {
    messages: messages,
    links: req.app.locals.links,
    id: req.params.messageId,
  });
});
module.exports = messageRouter;
