// db.js
// const messages = require("./routes/indexRouter");

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getmessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

module.exports = { getmessageById, messages };
