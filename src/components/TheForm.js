import React, { useState } from "react";

const TheForm = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const onTodoChange = (event) => {
    setEnteredTodo(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmitTodo(enteredTodo);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={enteredTodo}
        required
        type="text"
        placeholder="Enter a todo"
        className="task-input"
        onChange={onTodoChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default TheForm;
