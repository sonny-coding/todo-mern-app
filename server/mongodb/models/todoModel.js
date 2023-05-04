import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  finished: { type: Boolean, required: true },
});

const TodoModel = mongoose.model("Todo", TodoSchema);
export default TodoModel;
