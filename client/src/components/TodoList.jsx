import Todo from "./Todo";

const TodoList = ({ todoList, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.task}
          id={todo.id}
          finished={todo.finished}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
