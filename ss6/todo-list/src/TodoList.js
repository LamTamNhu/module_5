import { useEffect, useState } from "react";
import { findAll } from "./services/TodoListService";

export function TodoList() {
  const [list, setList] = useState([]);

  async function fetchApi() {
    try {
      const result = await findAll();
      setList(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <ul>
        {list.map((toDo) => (
          <li key={toDo.id}>{toDo.title}</li>
        ))}
      </ul>
    </>
  );
}
