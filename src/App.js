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
        completed: false,
      });
      return currentTodos;
    });

    // console.log(todos);
  };

  const deleteTodoHandler = (delTodo) => {
    setTodos(todos.filter((todo) => todo.id !== delTodo.id));
  };
  const completeTodoHandler = (completeTodo) => {
    setTodos((prevState) => {
      const currentTodos = prevState;

      return currentTodos.map((item) => {
        if (item.id === completeTodo.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    });

    // console.log("completed", todos);
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
          <TodoList
            todos={todos}
            onDeleteTodo={deleteTodoHandler}
            onCompleteTodo={completeTodoHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
