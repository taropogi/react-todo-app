const TodoItem = (props) => {
  const todo = props.todo;
  const todoOnChangeHandler = (e) => {
    e.preventDefault();
  };

  const completeHandler = () => {
    props.onCompleteTodo(todo);
  };
  const deleteHandler = () => {
    props.onDeleteTodo(todo);
  };

  const editHandler = () => {
    props.onEditTodo(todo);
  };
  return (
    <li className={"list-item " + (todo.completed ? "complete" : "")}>
      <input
        type="text"
        value={todo.title}
        className="list"
        onChange={todoOnChangeHandler}
      />

      <div>
        <button
          className="button-complete task-button"
          onClick={completeHandler}
        >
          <i className="fa fa-check-circle"></i>
        </button>
        <button className="button-edit task-button" onClick={editHandler}>
          <i className="fa fa-edit"></i>
        </button>
        <button className="button-delete task-button" onClick={deleteHandler}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
