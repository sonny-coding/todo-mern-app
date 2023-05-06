const Todo = ({ todo, id, finished, setRefresh }) => {
  const updateTodo = async (id) => {
    try {
      const newFinished = !finished;
      const response = await fetch("http://localhost:8000/api/todo", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          newFinished,
        }),
      });
      await response.json();
      setRefresh(true);
    } catch (error) {
      alert(error);
    }
  };
  const deleteTodo = async (id) => {
    try {
      const response = await fetch("http://localhost:8000/api/todo", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });
      await response.json();
      setRefresh(true);
      // alert("Success");
    } catch (error) {
      // console.log(error);
      alert(error);
    }
  };
  return (
    <li>
      <div className="todo-group">
        <input
          type="checkbox"
          checked={finished}
          onClick={() => updateTodo(id)}
        />
        <p className={finished ? "line-through" : ""}>{todo}</p>
      </div>
      <button onClick={() => deleteTodo(id)}>X</button>
    </li>
  );
};

export default Todo;
