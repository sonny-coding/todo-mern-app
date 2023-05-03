const Todo = ({ todo, id, finished, toggleTodo, deleteTodo }) => {
  return (
    <>
      <li>
        <div className="todo-group">
          <input
            type="checkbox"
            checked={finished}
            onClick={() => toggleTodo(id)}
          />
          <p className={finished ? "line-through" : ""}>{todo}</p>
        </div>
        <button onClick={() => deleteTodo(id)}>X</button>
      </li>
    </>
  );
};

export default Todo;
