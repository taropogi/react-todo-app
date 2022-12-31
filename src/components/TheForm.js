import React from "react";

const TheForm = () => {
  return (
    <form>
      <input type="text" placeholder="Enter a todo" className="task-input" />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default TheForm;
