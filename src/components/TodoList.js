import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onDeleteTodo={props.onDeleteTodo}
            onCompleteTodo={props.onCompleteTodo}
            onEditTodo={props.onEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
