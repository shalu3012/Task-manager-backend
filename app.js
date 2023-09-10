const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const taskroutes = require("./Routes/taskroutes");
const db = require("./db");
const errorController = require("./Middleware/errorController");

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/api/task", taskroutes);

app.use(errorController);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, function () {
  console.log("Application listening on port 5000");
});
