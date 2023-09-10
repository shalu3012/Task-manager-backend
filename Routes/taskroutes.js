const express = require("express");
const router = express.Router();
const {
  createtask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../Controllers/taskcontroller");

router.route("/tasks").get(getTasks);
router.route("/").get(getTask);
router.route("/create").post(createtask);
router.route("/delete").delete(deleteTask);
router.route("/update").put(updateTask);

module.exports = router;
