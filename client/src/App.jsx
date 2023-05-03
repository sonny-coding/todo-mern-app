import "./css/main.css";
import { useState } from "react";
import { nanoid } from "nanoid";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
export default function App() {
  const [todoList, setTodoList] = useState([
    { id: nanoid(), task: "eat dinner", finished: true },
    { id: nanoid(), task: "study", finished: false },
  ]);
  const [textInput, setTextInput] = useState("");
  const addTodo = () => {
    setTodoList([
      { id: nanoid(), task: textInput, finished: false },
      ...todoList,
    ]);
  };
  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  const toggleTodo = (id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, finished: !todo.finished } : todo
      )
    );
  };

  return (
    <>
      <h2>To-do list ✏️</h2>
      <TodoForm
        textInput={textInput}
        setTextInput={setTextInput}
        addTodo={addTodo}
      />
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
