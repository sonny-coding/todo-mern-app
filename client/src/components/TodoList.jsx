import Todo from "./Todo";

const TodoList = ({ todoList, toggleTodo }) => {
  console.log(todoList);
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo.task}
          id={todo._id}
          finished={todo.finished}
          toggleTodo={toggleTodo}
          // deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
