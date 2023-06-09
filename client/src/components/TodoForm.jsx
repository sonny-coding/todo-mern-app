const TodoForm = ({ textInput, setTextInput, setRefresh }) => {
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
            task: textInput,
          }),
        });
        await response.json();
        setRefresh(true);
        // alert("Success");
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
