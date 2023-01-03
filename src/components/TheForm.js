import React, { useState } from "react";

const TheForm = (props) => {
  const onTodoChange = (event) => {
    props.onChangeTodo(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmitTodo(props.enteredTodo);
    // setEnteredTodo("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={props.enteredTodo}
        required
        type="text"
        placeholder="Enter a todo"
        className="task-input"
        onChange={onTodoChange}
      />
      <button className="button-add" type="submit">
        {props.editTodo ? "Save" : "Add"}
      </button>
    </form>
  );
};

export default TheForm;
