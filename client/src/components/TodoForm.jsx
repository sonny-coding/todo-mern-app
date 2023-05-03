const TodoForm = ({ todo, setTodo }) => {
  const handleSubmit = () => {
    alert(todo);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form className="todo-form" action="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
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
