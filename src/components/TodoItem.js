const TodoItem = (props) => {
  const todoOnChangeHandler = (e) => {
    e.preventDefault();
  };
  return (
    <li className="list-item">
      <input
        type="text"
        value={props.todo.title}
        className="list"
        onChange={todoOnChangeHandler}
      />
      <div>
        <button className="button-complete task-button">
          <i className="fa fa-check-circle"></i>
        </button>
        <button className="button-edit task-button">
          {" "}
          <i className="fa fa-edit"></i>
        </button>
        <button className="button-delete task-button">
          {" "}
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
