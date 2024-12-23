import React, { useState, useEffect } from "react";
import AddTodoForm from "./components/add_new_form";
import TodoList from "./components/todo_list";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      className="card rounded shadow-sm"
      style={{
        maxWidth: "600px",
        margin: "60px auto",
      }}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">Task Management</h3>
        <TodoList todos={todos} setTodos={setTodos} />
        <hr />
        <AddTodoForm setTodos={setTodos} />
      </div>
    </div>
  );
}
