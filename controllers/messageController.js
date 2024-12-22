// controllers/messageController.js

const db = require("../db");

async function getmessageById(req, res) {
  const { messageId } = req.params;

  const message = await db.getmessageById(Number(messageId));

  if (!message) {
    res.status(404).send("message not found");
    return;
  }

  res.send(`message: ${message.text}`);
}

module.exports = { getmessageById };
