import { useState } from "react";

const TodoForm = ({ textInput, setTextInput }) => {
  const [form, setForm] = useState({
    task: "this is a test",
    finished: false,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (textInput) {
      try {
        const response = await fetch("http://localhost:8000/api/todo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            task: "123354",
          }),
        });
        await response.json();
        alert("Success");
      } catch (error) {
        alert(error);
      } finally {
        setTextInput("");
      }
    } else {
      alert("Please add a todo");
    }
  };
  const handleChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <form className="todo-form" action="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        value={textInput}
        onChange={handleChange}
        placeholder="todo"
      />
      <button className="todo__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
