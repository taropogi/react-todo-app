import React, { useState } from "react";
import "./App.css";
import TheHeader from "./components/TheHeader";
import TodoList from "./components/TodoList";
import TheForm from "./components/TheForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [enteredTodo, setEnteredTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const onSubmitTodoHandler = (todo) => {
    if (editTodo) {
      // save edit

      setTodos((prevState) => {
        const currentTodos = [...prevState];

        return currentTodos.map((el) => {
          if (el.id === editTodo.id) {
            return { ...el, title: enteredTodo };
          } else {
            return el;
          }
        });
      });
    } else {
      //add
      setTodos((prevState) => {
        const currentTodos = [...prevState];
        currentTodos.unshift({
          id: Math.random(),
          title: todo,
          completed: false,
        });
        return currentTodos;
      });
    }

    setEnteredTodo("");
    setEditTodo(null);
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

  const editTodoHandler = (todo) => {
    setEditTodo(todo);
    setEnteredTodo(todo.title);
  };

  const changeTodoHandler = (inputTodo) => {
    setEnteredTodo(inputTodo);
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <TheHeader />
        </div>
        <div>
          <TheForm
            enteredTodo={enteredTodo}
            onChangeTodo={changeTodoHandler}
            onSubmitTodo={onSubmitTodoHandler}
            editTodo={editTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            onDeleteTodo={deleteTodoHandler}
            onCompleteTodo={completeTodoHandler}
            onEditTodo={editTodoHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
