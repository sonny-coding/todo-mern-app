import Todo from "./Todo";

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
