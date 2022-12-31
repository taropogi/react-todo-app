const TodoItem = (props) => {
  const todoOnChangeHandler = (e) => {
    e.preventDefault();
  };
  return (
    <li className="todo-list">
      <input
        type="text"
        value={props.todo.title}
        className="list"
        onChange={todoOnChangeHandler}
      />
    </li>
  );
};

export default TodoItem;
