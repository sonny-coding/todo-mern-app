const Todo = ({ todo }) => {
  return (
    <>
      <li key={todo}>
        <div className="todo-group">
          <input type="checkbox" />
          <p>{todo}</p>
        </div>
        <button>X</button>
      </li>
    </>
  );
};

export default Todo;
