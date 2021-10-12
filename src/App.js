import "./App.css";
import TodoList from "./TodoList";
import SearchUsers from "./UsersList";
import SearchTodos from "./TodoList";

function App() {
  return (
    <div className="App">
      <h2>Componente de Alta Ordem</h2>
      <div className="section">
        <div>
          <SearchUsers />
        </div>
        <div>
          <SearchTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
