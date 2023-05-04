import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  finished: { type: Boolean, required: true },
});

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;
