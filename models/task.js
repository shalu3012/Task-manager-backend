const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true, default: "Todo" },
});

const Task = new mongoose.model("task", taskSchema);

module.exports = Task;
