import axios from "axios";

export async function findAll() {
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export async function save(todo) {
  try {
    console.log(todo);
    const result=await axios.post("https://jsonplaceholder.typicode.com/todos", todo);
    console.log(result.data);
  } catch (e) {
    console.log(e);
  }
}
