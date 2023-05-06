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
// delete a todo
router.route("/").delete(async (req, res) => {
  try {
    const { id } = req.body;
    const deleteItem = await Todo.findByIdAndDelete(id);
    if (!deleteItem) {
      res.status(404).json({ sucess: false, message: "No item found" });
    }
    res.status(200).json({ sucess: true, data: deleteItem });
  } catch (error) {
    res.status(500).json({ sucess: false, message: error });
  }
});
// create a todo
router.route("/").post(async (req, res) => {
  try {
    const { task } = req.body;
    const newTodo = await Todo.create({
      task,
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
