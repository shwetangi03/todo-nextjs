import mongoose from "mongoose";

const todoModel = new mongoose.Schema({
  task: String,
  completed: Boolean,
  date: Date,
});

const Todos = mongoose?.models?.todos || mongoose.model("todos", todoModel);

export default Todos;
