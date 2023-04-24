import "./css/main.css";
import { useState } from "react";
export default function App() {
  const todoLists = ["eat dinners", "clean the bathroom", "study"];
  const [todo, setTodo] = useState("testing");
  const handleSubmit = () => {
    alert(todo);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const list = todoLists.map((item) => {
    return (
      <li key={item}>
        <div className="todo-group">
          <input type="checkbox" />
          <p>{item}</p>
        </div>
        <button>X</button>
      </li>
    );
  });
  return (
    <>
      <div className="">
        <h2>To-do list ✏️</h2>
        <form className="todo-form" action="submit" onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={handleChange} />
          <button className="todo__button" type="submit">
            Submit
          </button>
        </form>
        <ul>{list}</ul>
      </div>
    </>
  );
}
