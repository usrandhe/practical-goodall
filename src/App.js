import "./styles.css";
import { useState } from "react";
import Test from "./Test";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTOdo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  //const filter = todos.filter(() => {});
  return (
    <>
      <div className="App">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add Todo"
        />
        <button onClick={addTOdo}>Add Todo</button>
        {todos.length === 0 ? null : <h2>My todos</h2>}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map((todo, index) => (
            <>
              <li key={todo.id}>
                {todo.text}

                <button onClick={() => removeTodo(index)}>Remove</button>
              </li>
            </>
          ))}{" "}
        </ul>{" "}
        <Test searchResult={todos} />
      </div>
    </>
  );
}
