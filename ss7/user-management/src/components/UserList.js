import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "./../redux/action/user";
import { UserDelete } from "./UserDelete";

export function UserList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Getting users");
    return dispatch(getAllUser());
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <UserDelete id={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
