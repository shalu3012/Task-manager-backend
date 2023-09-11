const asyncHandler = require("express-async-handler");
const Task = require("../models/task");

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  if (tasks) {
    return res.status(200).send({
      message: "All tasks found.",
      tasks: tasks,
    });
  }
});

const getTask = asyncHandler(async (req, res) => {
  const _id = req.query.id;

  const task = await Task.findOne({ _id });

  if (task) {
    return res.status(200).send({
      message: "Task found.",
      task: {
        name: task.name,
        status: task.status,
      },
    });
  }
});

const createtask = asyncHandler(async (req, res) => {
  const { name, status } = req.body;

  const task = await Task.create({
    name,
    status,
  });
  if (task) {
    return res.status(201).send({
      message: "Task saved.",
      task: {
        name: task.name,
        status: task.status,
      },
    });
  }
});

const updateTask = asyncHandler(async (req, res) => {
  const _id = req.query._id;

  const { name, status } = req.body;
  const task = await Task.findOneAndUpdate({ _id }, { name, status });
  if (!task) {
    return res.status(404).send({ error: "Document not found" });
  } else {
    return res.status(200).send({
      message: "Task updated successfully.",
      task: {
        name: name || task.name,
        status: status || task.status,
      },
    });
  }
});
const deleteTask = asyncHandler(async (req, res) => {
  const _id = req.query._id;
  await Task.deleteOne({ _id: _id })
    .then((response) => {
      res.status(200).send({
        message: "Task deleted successfully.",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = { createtask, getTasks, deleteTask, updateTask, getTask };
