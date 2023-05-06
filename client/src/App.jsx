import "./css/main.css";
import { useEffect, useState } from "react";
// import { nanoid } from "nanoid";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [refresh, setRefresh] = useState(false);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/todo", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();
        setTodoList(result.data.reverse());
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    if (refresh) {
      fetchTodos();

      setTimeout(() => {
        setRefresh(false);
      });
    }
  }, [refresh]);
  useEffect(() => {
    fetchTodos();
  }, []);

  // const addTodo = () => {
  //   setTodoList([
  //     { id: nanoid(), task: textInput, finished: false },
  //     ...todoList,
  //   ]);
  // };
  // const deleteTodo = (id) => {
  //   const newTodoList = todoList.filter((todo) => todo.id !== id);
  //   setTodoList(newTodoList);
  // };
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
        setRefresh={setRefresh}
        // addTodo={addTodo}
      />
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        setRefresh={setRefresh}
      />
    </>
  );
}
