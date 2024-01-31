import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";

function App() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/create">Create</NavLink>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/create" element={<CreateTodo />} />
      </Routes>
    </>
  );
}

export default App;
