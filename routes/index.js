var express = require("express");
var router = express.Router();
const numbers = [1, 2, 3, 4, 5];
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    numbers: numbers,
  });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "test" });
});

router.post("/new", function (req, res, next) {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  res.render("/", {
    messages: messages.push({
      text: messageText,
      user: messageUser,
      added: new Date(),
    }),
  });

  res.redirect("/");
});

module.exports = router;
