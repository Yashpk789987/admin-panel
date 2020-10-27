import { getUsers } from "../api/users";

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const handleReceiveUsers = () => async (dispatch) => {
  try {
    const { rows: users } = await getUsers(1, "&limit=1000");
    dispatch(receiveUsers(users));
  } catch (e) {
    console.log(e);
  }
};
