import axios from "axios";
const findAll = () => {
  console.log("findAll worked");
  console.log(axios.get("https://jsonplaceholder.typicode.com/users").data);
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

const deleteUserById = (id) => {
  console.log("deleted");
  return axios.put("https://jsonplaceholder.typicode.com/users/" + id);
};

export const userService = {
  findAll,
  deleteUserById,
};
