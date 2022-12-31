import "./App.css";
import TheHeader from "./components/TheHeader";
// import TodoList from "./components/TodoList";
import TheForm from "./components/TheForm";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <TheHeader />
        </div>
        <div>
          <TheForm />
        </div>
      </div>
      {/* <TodoList /> */}
    </div>
  );
};

export default App;
