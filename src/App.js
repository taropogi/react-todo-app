import "./App.css";
import TheHeader from "./components/TheHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <TheHeader />
        </div>
      </div>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
