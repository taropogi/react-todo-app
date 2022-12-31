import React, { useState } from "react";
import "./App.css";
import TheHeader from "./components/TheHeader";
import TodoList from "./components/TodoList";
import TheForm from "./components/TheForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const onSubmitTodoHandler = (todo) => {
    setTodos((prevState) => {
      const currentTodos = [...prevState];
      currentTodos.unshift({
        id: Math.random(),
        title: todo,
      });
      return currentTodos;
    });

    // console.log(todos);
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <TheHeader />
        </div>
        <div>
          <TheForm onSubmitTodo={onSubmitTodoHandler} />
        </div>
        <div>
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
