const express = require("express");
const app = express();

//import the Path CommonJS module from Node
const path = require("node:path");

// Next, we need to let our app know that we intend to use EJS as a template engine,
// as well as where to look for view files.// In your app.js file, set the following application properties:
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Serving Static Assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

//adding routers to our app
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

app.locals.links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "Form" },
];

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messageRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
