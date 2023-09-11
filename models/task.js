const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String },
});

const Task = new mongoose.model("task", taskSchema);

module.exports = Task;
