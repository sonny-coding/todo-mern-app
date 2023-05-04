import express from "express";
import * as dotenv from "dotenv";
import Todo from "../mongodb/models/todoModel.js";

dotenv.config();
const router = express.Router();

// get all todos
router.route("/").get(async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    res.status(500).json({ sucess: false, message: error });
  }
});

// create a todo
router.route("/").post(async (req, res) => {
  try {
    console.log(`This is req.body ${req.body}`);
    // const { task, finished } = req.body;
    // console.log("🚀 ~ file: todo.js:22 ~ router.route ~ finished:", finished);
    // console.log("🚀 ~ file: todo.js:22 ~ router.route ~ task:", task);

    const newTodo = await Todo.create({
      task: "example",
      finished: false,
    });
    console.log(newTodo);
    res.status(200).json({
      success: true,
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to create a todo, please try again",
    });
  }
});

export default router;
