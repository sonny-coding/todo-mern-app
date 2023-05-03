const TodoForm = ({ textInput, setTextInput, addTodo }) => {
  const handleSubmit = (e) => {
    // alert(textInput);
    e.preventDefault();
    addTodo(textInput);
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
