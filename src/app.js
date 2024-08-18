require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();

const homeRouter = require("./routes/home");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("", homeRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Mini message board is running on port: ${PORT}`);
});
