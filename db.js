const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB Connection Error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

module.exports = db;
