import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodoProvider from "./contexts/TodoContext";
import HomePage from './pages/HomePage';
import TodoForm from './pages/TodoForm';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<TodoForm/>}/>
        </Routes>
      </TodoProvider>
    </>
  );
}

export default App;
