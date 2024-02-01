import { useDispatch } from "react-redux";
import { deleteUserById } from "../redux/action/user";

export function UserDelete({ id }) {
  const dispatch = useDispatch();

  const deleteUser = async (id) => {
    // let result = await dispatch(deleteUserById(id));
    alert("200");
  };
  return (
    <>
      <button onClick={() => deleteUser(id)} className="btn btn-danger">
        Delete
      </button>
    </>
  );
}
