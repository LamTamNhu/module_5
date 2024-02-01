import { userService } from "../../services/UserService";
import { DELETE_USER_BY_ID, GET_ALL_USERS } from "./type";

export const getAllUser = () => async (dispatch) => {
  try {
    const result = await userService.findAll();
    dispatch({
      type: GET_ALL_USERS,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserById = (id) => async (dispatch) => {
  try {
    const result = await userService.deleteUserById(id);
    dispatch({
      type: DELETE_USER_BY_ID,
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};
