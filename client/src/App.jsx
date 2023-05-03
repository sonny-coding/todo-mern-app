import "./css/main.css";
import { useState } from "react";
import { nanoid } from "nanoid";

// import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
export default function App() {
  const [todoList, setTodoList] = useState([
    { id: nanoid(), task: "eat dinner", finished: true },
    { id: nanoid(), task: "study", finished: false },
  ]);
  const deleteTodo = (id) => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, finished: !todo.finished } : todo
      )
    );
  };

  const [textInput, setTextInput] = useState("");

  return (
    <>
      <h2>To-do list ✏️</h2>
      <TodoForm textInput={textInput} setTextInput={setTextInput} />
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
