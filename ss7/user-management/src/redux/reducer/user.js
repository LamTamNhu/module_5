function userReducer(users = [], action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_USERS":
      return payload;
    case "DELETE_USER_BY_ID":
      return payload;
    default:
      return users;
  }
}
export default userReducer;
