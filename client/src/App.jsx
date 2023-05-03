import "./css/main.css";
import { useState } from "react";
// import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
export default function App() {
  const todoList = ["eat dinners", "clean the bathroom", "study"];
  const [todo, setTodo] = useState("");

  return (
    <>
      <h2>To-do list ✏️</h2>
      <TodoForm todo={todo} setTodo={setTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}
