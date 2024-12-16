const express = require("express");
const app = express();

//adding routers to our app
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
